
const blowfish = require('xs-blowfish');
const {md5, sha384, whirlpool} = require('hash-wasm')
const vigenere = require('vigenere')



module.exports = {

    async encodeMD5(req, res){
        const message = {...req.body}
        const text = await md5(message.text)
        if(message.text === ""){
            return res.json({"original-text": message.text, "encode-text": "Erro"})
        }
    
        return res.json({"original-text": message.text, "encode-text": await text})
        
    },
    async encodeSHA384(req, res){
        const message = {...req.body}
        const text = await sha384(message.text)
        if(message.text === ""){
            return res.json({"original-text": message.text, "encode-text": "Erro"})
        }
    
        return res.json({"original-text": message.text, "encode-text": await text})

    },
    async encodeWhirlpool(req, res){
        const message = {...req.body}
        const text = await whirlpool(message.text)
        if(message.text === ""){
            return res.json({"original-text": message.text, "encode-text": "Erro"})
        }
    
        return res.json({"original-text": message.text, "encode-text": await text})
       

    },
    encodeBlowfish(req, res){
        const message = {...req.body}
        const bf = new blowfish('crypt')
        const encoding = bf.encrypt(message.text)


        if(message.text === ""){
            return res.json({"original-text": message.text, "encode-text": "Erro"})
        }
    
        return res.json({"original-text": message.text, "encode-text":encoding})
    
        //var decoding = bf.decrypt(encoding);
        // console.log(JSON.stringify(decoding));
        
    },
    encodeVigenere(req, res){
        const message = {...req.body}
        const secretMessage = vigenere.encode(message.text, message.key);
        if(message.text === ""){
            return res.json({"original-text": message.text, "encode-text": "Erro"})
        }
    
        return res.json({"original-text": message.text, "encode-text":secretMessage})
    }, 
}
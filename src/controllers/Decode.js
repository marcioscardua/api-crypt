const vigenere = require('vigenere')
const blowfish = require('xs-blowfish');
const { base64decode } = require('nodejs-base64');



module.exports = {
    decodeVigenere(req, res){
        const message = {...req.body}
        const decodeMessage = vigenere.decode(message.text, message.key);
        if(message.text === ""){
            return res.json({"original-text": message.text, "encode-text": "Erro"})
        }
        
        //Erro em Strings grandes
        return res.json({"original-text": message.text, "encode-text":decodeMessage})

    },
    decodeBase64(req, res){
        const message = {...req.body}
        const decoded = base64decode(message.text)
        if(message.text === ""){
            return res.json({"original-text": message.text, "encode-text": "Erro"})
        }
    
        return res.json({"original-text": message.text, "encode-text":decoded})

    }


}
const express = require('express')
const routes = express.Router()
const DecodeController = require('./controllers/Decode')
const EncodeController = require('./controllers/Encode')

routes.get('/encode/md5', EncodeController.encodeMD5)
routes.get('/encode/sha384', EncodeController.encodeSHA384)
routes.get('/encode/whirlpool', EncodeController.encodeWhirlpool)
routes.get('/encode/blowfish', EncodeController.encodeBlowfish)
routes.get('/encode/vigenere', EncodeController.encodeVigenere)
routes.get('/encode/base64', EncodeController.encodeBase64)


routes.get('/decode/vigenere', DecodeController.decodeVigenere)
routes.get('/decode/base64', DecodeController.decodeBase64)

module.exports = routes
const express = require('express')
const fs = require('fs')
const app = express()

const port = 3000

var jwt = require('jsonwebtoken');

var cert = fs.readFileSync('plik_certyfikat.crt');

var token = fs.readFileSync('plik_bez_hasla.key');

jwt.sign({foo: 'bar'}, token, {algorithm: 'RSA'}, function(err,token){
    console.log('SIGNED')
})

jwt.verify(token, cert, function(err, decoded) {
    console.log(decoded)
})

app.get('/', (req, res) => {
    res.send('TEST')
})

app.listen(port)
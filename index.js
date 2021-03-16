const encrypt = require('./encrypt.js');

console.log('Tu cadena de texto antes de encriptar es: ' + encrypt.string)
console.log('TU CADENA DE TEXTO ENCRIPTADA ES: ' + encrypt.encrypt(encrypt.string, encrypt.cifrados));
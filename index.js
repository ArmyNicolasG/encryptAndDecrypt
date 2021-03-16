//VERSIÓN 1.1
const encrypt = require('./encrypt.js');

let string = 'Aquí pones tu cadena de texto a encriptar';
console.log('Tu cadena de texto antes de encriptar es: ' + string)

//RETORNA UN ARRAY CON LA CADENA ENCRIPTADA
console.log('TU CADENA DE TEXTO ENCRIPTADA ES: ' + encrypt.encrypt(string, encrypt.cifrados))

//VERSIÓN 1.2
const encrypt = require('./encrypt.js');

let string = 'Aquí pones tu cadena de texto a encriptar';
console.log('Tu cadena de texto antes de encriptar es: ' + string)

//RETORNA UN ARRAY CON LA CADENA ENCRIPTADA, SI QUIERES CAMBIAR EL CÓDIGO DE ENCRIPCIÓN POR CARÁCTER, DEBES MODIFICARLO EN LA CONSTANTE DE cifrados EN encrypt.js
// console.log('TU CADENA DE TEXTO ENCRIPTADA ES: ' + encrypt.encrypt(string, encrypt.cifrados))
console.log('TU CADENA DE TEXTO ENCRIPTADA ES: ' + encrypt.encrypt(string))

//POR SI DESEA USAR LA ENCRIPCION EN UN PROYECTO, AQUI SE EXPORTA
exports.encrypt = encrypt.encrypt;

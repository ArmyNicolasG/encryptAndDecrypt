//VERSIÓN 1.1
// var cadena = 'Aquí va tu cadena';
// cadena = cadena.toLowerCase();

// PUEDE CREAR SU PROPIO CIFRADO CAMBIANDO LAS LETRAS O SIMBOLOS DE LAS LETRAS EN LA VARIBLE CIFRADOUNO
const cifrados = {
  a: '001',
  b: '002',
  c: '003',
  d: '004',
  e: '005',
  f: '006',
  g: '007',
  h: '008',
  i: '009',
  j: '010',
  k: '011',
  l: '012',
  m: '013',
  n: '014',
  ñ: '015',
  o: '016',
  p: '017',
  q: '018',
  r: '019',
  s: '020',
  t: '021',
  u: '022',
  v: '023',
  x: '024',
  y: '025',
  z: '026',
  space: '027'
}
const encriptar = (string, codificacion) => {
  let tem = string.split('');
  var encryption = [];
  tem.forEach(caracter => {
    let encode;
    switch(caracter){
      case 'a':
        encode = codificacion.a;
        encryption.push(encode); 
      break;
      case 'b':
        encode = codificacion.b;
        encryption.push(encode);
      break;
      case 'c':
        encode = codificacion.c;
        encryption.push(encode); 
      break;
      case 'd':
        encode = codificacion.d;
        encryption.push(encode);
      break;
            case 'e':
        encode = codificacion.e;
        encryption.push(encode); 
      break;
      case 'f':
        encode = codificacion.f;
        encryption.push(encode);
      break;
      case 'g':
        encode = codificacion.g;
        encryption.push(encode); 
      break;
      case 'h':
        encode = codificacion.h;
        encryption.push(encode);
      break;
            case 'i':
        encode = codificacion.i;
        encryption.push(encode); 
      break;
      case 'j':
        encode = codificacion.j;
        encryption.push(encode);
      break;
      case 'k':
        encode = codificacion.k;
        encryption.push(encode); 
      break;
      case 'k':
        encode = codificacion.k;
        encryption.push(encode);
      break;
            case 'l':
        encode = codificacion.l;
        encryption.push(encode); 
      break;
      case 'm':
        encode = codificacion.m;
        encryption.push(encode);
      break;
      case 'n':
        encode = codificacion.n;
        encryption.push(encode); 
      break;
      case 'ñ':
        encode = codificacion.ñ;
        encryption.push(encode);
      break;
      case 'o':
        encode = codificacion.o;
        encryption.push(encode);
      break;
            case 'p':
        encode = codificacion.p;
        encryption.push(encode);
      break;
      case 'q':
        encode = codificacion.q;
        encryption.push(encode);
      break;
      case 'r':
        encode = codificacion.r;
        encryption.push(encode);
      break;
      case 's':
        encode = codificacion.s;
        encryption.push(encode);
      break;
            case 't':
        encode = codificacion.t;
        encryption.push(encode);
      break;
      case 'u':
        encode = codificacion.u;
        encryption.push(encode);
      break;
            case 'v':
        encode = codificacion.v;
        encryption.push(encode);
      break;
      case 'x':
        encode = codificacion.x;
        encryption.push(encode);
      break;
            case 'y':
        encode = codificacion.y;
        encryption.push(encode);
      break;
      case 'z':
        encode = codificacion.z;
        encryption.push(encode);
      break;
      case ' ':
        encode = codificacion.space;
        encryption.push(encode);
      break;
    }
  })
  return encryption.toString('');
}
var exporting = {
    cifrados: cifrados,
    encrypt: encriptar,
}
module.exports = exporting;

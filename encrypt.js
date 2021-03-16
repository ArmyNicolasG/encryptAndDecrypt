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
const encriptar = (string) => {
  let tem = string.split('');
  var encryption = [];
  tem.forEach(caracter => {
    let encode;
    switch(caracter){
      case 'a':
        encode = cifrados.a;
        encryption.push(encode); 
      break;
      case 'b':
        encode = cifrados.b;
        encryption.push(encode);
      break;
      case 'c':
        encode = cifrados.c;
        encryption.push(encode); 
      break;
      case 'd':
        encode = cifrados.d;
        encryption.push(encode);
      break;
            case 'e':
        encode = cifrados.e;
        encryption.push(encode); 
      break;
      case 'f':
        encode = cifrados.f;
        encryption.push(encode);
      break;
      case 'g':
        encode = cifrados.g;
        encryption.push(encode); 
      break;
      case 'h':
        encode = cifrados.h;
        encryption.push(encode);
      break;
            case 'i':
        encode = cifrados.i;
        encryption.push(encode); 
      break;
      case 'j':
        encode = cifrados.j;
        encryption.push(encode);
      break;
      case 'k':
        encode = cifrados.k;
        encryption.push(encode); 
      break;
      case 'k':
        encode = cifrados.k;
        encryption.push(encode);
      break;
            case 'l':
        encode = cifrados.l;
        encryption.push(encode); 
      break;
      case 'm':
        encode = cifrados.m;
        encryption.push(encode);
      break;
      case 'n':
        encode = cifrados.n;
        encryption.push(encode); 
      break;
      case 'ñ':
        encode = cifrados.ñ;
        encryption.push(encode);
      break;
      case 'o':
        encode = cifrados.o;
        encryption.push(encode);
      break;
            case 'p':
        encode = cifrados.p;
        encryption.push(encode);
      break;
      case 'q':
        encode = cifrados.q;
        encryption.push(encode);
      break;
      case 'r':
        encode = cifrados.r;
        encryption.push(encode);
      break;
      case 's':
        encode = cifrados.s;
        encryption.push(encode);
      break;
            case 't':
        encode = cifrados.t;
        encryption.push(encode);
      break;
      case 'u':
        encode = cifrados.u;
        encryption.push(encode);
      break;
            case 'v':
        encode = cifrados.v;
        encryption.push(encode);
      break;
      case 'x':
        encode = cifrados.x;
        encryption.push(encode);
      break;
            case 'y':
        encode = cifrados.y;
        encryption.push(encode);
      break;
      case 'z':
        encode = cifrados.z;
        encryption.push(encode);
      break;
      case ' ':
        encode = cifrados.space;
        encryption.push(encode);
      break;
    }
  })
  return encryption.toString('');
}
var exporting = {
    encrypt: encriptar,
}
module.exports = exporting;

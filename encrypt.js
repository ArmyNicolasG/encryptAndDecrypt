//VERSIÓN 1.6
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
    if (caracter in cifrados)
  encryption.push(cifrados[caracter])

  })
  return encryption.join('');
}
exports.encrypt = encriptar;
/*  >> map
    >> filter
    >> reduce
    Usados para tratar ou transformar dados. 
*/

/* 
O array.map deve ser usado quado for preciso obter um novo array, com a mesma quantidade de itens do array original.
  numbers.map((item, index, array) => {}) 
  >>sempre deve retornar um valor.
  array.map X array.forEach()
  forEach foi feito para executar mudança fora do método e não foi feito para retornar valor.

////////////////////////////////////////////////////////////////
O array.filter deve ser usado quando for preciso obter um novo array, com uma quantidade de itens menor que a do original.
  numbers.filter((item, index, array) => {} )

////////////////////////////////////////////////////////////////
O array.reduce deve ser usado quando for preciso, baseado no array original, "reduzir" o array à um valor.
O resultado pode ser qualquer valor: objeto, string, número, novo array etc.
*/

// array.map exemplo 1:
const numbers = [1, 2, 3];
/* numbers.map((item, index, array) => {console.log(item, index, array)}) 
  >> só o primeiro parâmetro é obrigatório.
  numbers.map((item) => {console.log(item)}) 
imprime
1 0 [ 1, 2, 3 ]
2 1 [ 1, 2, 3 ]
3 2 [ 1, 2, 3 ]*/
const doubledNumbers = numbers.map(item => {
  return item * 2;
});
console.log(numbers === doubledNumbers);
console.log(numbers);
console.log(doubledNumbers);

// array.map exemplo 2:
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map(price => price * 0.5);
console.log(salePrices);

// array.map exemplo 3:
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 },
];
const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return {
      name: product.name,
      price: product.price * 0.5,
    };
  }
  return product; // para retornar o item com valor menor que 30
});
console.log(products);
console.log(saleProducts);

// array.filter exemplo 1:
const randomNumbers = [36, 99, 37, 63];
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37);
// parâmetro e condição para true
console.log(numbersGreaterThan37);

// array.filter exemplo 2:
const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true },
];
const premiumUsers = users.filter(user => user.premium);
// user == cada usuário e user.premiu == premium true
console.log(premiumUsers);
const notPremiumUsers = users.filter(user => !user.premium);
console.log(notPremiumUsers);

// array.reduce exemplo 1:
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0); // 0 == valor inicial
console.log(sumResult);

// array.reduce exemplo 2:
const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 },
];
const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
  if (phaseScore.name === 'Roger Melo') {
    return accumulator + phaseScore.score;
  }
  return accumulator;
}, 0);
console.log(rogerScore);

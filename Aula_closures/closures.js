// Escopo léxico - o fato de funções aninhadas terem o poder de
// buscar variável declarada em escopos acima delas
const extern = () => {
  const book = 'Sapiens: Uma Breve História da Humanidade';

  const intern = () => {
    // book será buscada no escopo acima
    console.log(book.toUpperCase());
  };

  intern();
};
// extern();

// Closures - o agrupamento de uma função com seu escopo léxico
/* toda função em JS é uma closure.  */
const lexical = 'Oi léxico';

// const safe = secret => {
//   const local = 'Oi local';
//   console.log(lexical);
// };

// safe();

// Simulação de dados privados (encapsulamento)
/* encapsulamento é, basicamente, envolver os detalhes da implementação dos dados privados em uma abstração.
e é dessa forma que se consegue programar para uma interface, ao invés de programar para uma implementação. */

const safe = secret =>
  // objeto envolvido com parênteses, para ser executado primeiro
  ({
    // método para retornar o valor recebido no parametro secret
    getSecret: () => secret,
  });
const teste = 'teste';

const privateUserData = 'Dado privado';
const obj = safe(privateUserData); // armazena o objeto

console.log(obj); // { getSecret: [Function: getSecret] }
console.log(obj.getSecret); // [Function: getSecret // () => secret
console.log(obj.getSecret()); // Dado privado

// é possível encapsular dados privados sem criar objeto,
// retornando uma função, ao invés de retonrar um objeto que tem um método
// const func = secret => () => secret
// faz a mesma coisa que um método privilegiado faz
// acessa o dado privado estabelecido na closure
const func = secret => () => secret;
console.log(func(privateUserData)());

const privateUserData2 = 'Outro dado privado';
const privateUserData3 = 'Mais um dado privado';
const getSecret2 = func(privateUserData2);
const getSecret3 = func(privateUserData3);
console.log(getSecret2());
console.log(getSecret3());

// clusures possibilitam criar higher-order functions
// função que ou recebe função como argumento ou uma função que retorna uma função ou os dois

// curried function
const addTo = a => b => a + b;

// funções especializadas // partial applications da addTo
const increment = addTo(1);
const increment10 = addTo(10);
const increment20 = addTo(20);

console.log(increment(7));
console.log(increment10(7));
console.log(increment20(7));

// partial applications e currying dependem das closures

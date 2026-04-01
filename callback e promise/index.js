import { ehPar, ehParV2, ehParV3 } from "./matematica.js";
//v1 do ehPar
//console.log(ehPar(8));

//V2 do ehPar (Promise)
/*ehParV2(10)
.then((resultado) => { //será acionado caso a Promessa seja "resolved"
    console.log('Promessa resolvida: ', resultado);
})
.catch((erro) => { //será acionado caso a Promessa seja "rejected"
    console.log('Promessa rejeitada: ', erro);
})*/

//V3 (Promie + API)
/*ehParV3(4)
.then((res) => console.log('Promessa resolvida! ' + res))
.catch((erro) => console.log('Promessa rejeitada! ' + erro))

ehParV3('Oi')
.then((res) => console.log('Promessa resolvida! ' + res))
.catch((erro) => console.log('Promessa rejeitada! ' + erro))*/

//V3 com asyn/await
const executar = async () => {
  await ehParV3(4)
    .then((res) => console.log('Promessa resolvida! ' + res))
    .catch((erro) => console.log('Promessa rejeitada! ' + erro))

  await ehParV3('Oi')
    .then((res) => console.log('Promessa resolvida! ' + res))
    .catch((erro) => console.log('Promessa rejeitada! ' + erro))
}

executar();

// IIFE (Immediately Invoked Function Expression)
;(async () => {
  await ehParV3(4)
    .then((res) => console.log('Promessa resolvida! ' + res))
    .catch((erro) => console.log('Promessa rejeitada! ' + erro))

  await ehParV3('Oi')
    .then((res) => console.log('Promessa resolvida! ' + res))
    .catch((erro) => console.log('Promessa rejeitada! ' + erro))
})()

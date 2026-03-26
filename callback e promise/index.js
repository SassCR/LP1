import { ehPar, ehParV2 } from "./matematica.js";
//V1
//console.log(ehPar(8));

//V2 do ehPar (Promise)
ehParV2(10)
.then((resultado) => {//Ele será acionado caso a Promessa seja "Resolved"
 console.log("Promessa resolvida:", resultado);
    
})
.catch((error) => {//Ele será acionado caso a Promessa seja "rejected"
console.log("Promessa rejeitada", error);

})


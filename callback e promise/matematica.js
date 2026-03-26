//Função para verificar se o número é par

import { promises } from "node:dns"

//Devolve true se for  par e devolve false se for impar
export const ehPar = (numero) => {
    //V1
    /*    if (numero % 2 == 0) {
            return true;
        } else {
            return false;
        }
    */
    //v2                           //pode ser true e false também.
    // return (numero % 2 == 0)? "par" : "impar"; 

    //v3

    return numero % 2 == 0
    //let n = 2
    //console.log(ehPar(n));

}
export const ehParV2 = (numero) => {
    return new Promise((resolver, rejeitar) => {
        if (isNaN(numero)) {
            rejeitar("Isso não é um número.")
        }
        else {
            resolver(numero % 2 == 0)
        }
    })
}
//V3
const URl_API = "https://api.isevenapi.xyz/api/iseven/"
export const ehParV3 = (numero) => {
    return new Promise((resolver, rejeitar) => {
        if (isNaN(numero))
            rejeitar("Numéro invalido");
        else {

        }
    })
}
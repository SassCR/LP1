const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite seu número: "))
//versao 1
if (numero > 0) {
    console.log("Esse número é positivo!");
    
}if(numero < 0){
    console.log("Seu numero é Negativo!");
    
}if (numero === 0) {
    console.log("Seu número é Zero!");
    
}
//Posso fazer varíos ifs para saber se o número é positivo ou negativo ou igual.
//segunda versão

if (numero > 0) {
    console.log("Positivo!");
    
}else{
    if (numero < 0) {
        console.log("Negativo!");
        
    }else{
        console.log("Zero!");
        
    }
}
//Dessa maneira também pode ser feita a verificação dos números. Coloca 3 possibilidades.
//IF ELSE só resolve duas coisas, então teria que coloca outro IF else dentro do primeiro IF.
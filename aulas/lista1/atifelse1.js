const prompt = require("prompt-sync")()
//Esse seria o metodo para verificar os números.
let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")

if (num1 == num2) {
    console.log("São iguais.");
    
}else{
    console.log("São diferentes.");
    
}
//segunda forma de fazer verificação.

if(num1 == num2){
    console.log("Iguais");//Isso é uma instrução.
    
}if (num1 != num2) {
    console.log("São diferentes.");
    
}

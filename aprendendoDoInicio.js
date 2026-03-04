

for (var contador = 1; contador <= 1000; contador++) {
    var numero = Number(prompt("informe o numero: "))
    if (numero % 2 == 0) {
        console.log("O numero: "+ numero + "É par");
    } else {
        console.log("O numero: "+ numero + "É impar");

    }

}
//funções
function soma (a,b){
    return a + b
}
function divisão(a, b){
    if(b ===0){
        return "Impossivel dividir por Zero!"
    }
    return a / b
}

var resultado = soma(10,20)
console.log(resultadoSoma)

var resultado = Divisão(10,20)
console.log(resultadoDivisão)

//outra maneira de fazer função.

soma = (a,b) => {//Arrow function.
    return a + b
}
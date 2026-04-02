//Criando um vetor
//maneira antiga
let vetor1 = []
console.log(vetor1);

//Metodo novo

let vetor2 = new Array(5)
console.log(vetor2);

let vetor3 = ["Cleber", "kety", "Cleber"]
console.log(vetor3);

let vetor4 = new Array("Cleber", "Francisco", "Kleber")
console.log(vetor4);
//Como ver o tamanho do vetor
console.log(vetor4.length);//length ele fala o tamanho do vetor, ele não fala se tem coisa dentro ou não, apenas o tamanho.

//Adicionando elemento no vetor
vetor4[3] = "Adrasteia";
console.log(vetor4);
//O que não fazer
vetor4[50] = "Ronaldo"
console.log(vetor4.length);

//Para adicionar um ou mais item no final do vetor use o:
vetor4.push("Figo", "Claudia");
console.log(vetor4);
//Para remover o ultimo unidade é só usar o :
vetor4.pop();
//Para remover a unidade toda do inicio use o:
vetor1.shift()
//Para adicionar uma unidade no começo
vetor4.unshift("Filo")
//Para juntar os vetores
let carros = ["Relampago", "Mate"]
let carros2 = ["Cone", "Pneu", "Capo"]
//Ele junta o carros1 e carros2 porem ele
let todosCarros = carros.concat(carros2)
//Para ordena um vetor pequeno.
todosCarros.sort()
//Para inverte o vetor de tras pra frente ou muda o um para o 5 e o 5 para um use esse comando:
todosCarros.reverse()
//Usando o for para andar pelos vetores
for(let i = 0; 1 < todosCarros.length; i++){
    console.log(todosCarros[i]);
    
}




/*import * as fs from "node:fs"
const dados = "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto "

//V1 = callback
fs.writeFile('./anotações.txt', dados, () => {
    console.log('Arquivo 1 Gerado com sucesso.');
    
}); //Essa função vai faz duas coisas, ela cria um arquivo, caso ele já exista ela vai apagar tudo e deixa ele em branco.


fs.writeFile("./arquivo1.txt", dados, () => {
    console.log("Arquivo 1 gravado com sucesso");
    fs.writeFile("./Arquivo2.txt,", dados, () => {
        console.log("Arquivo 2 criado com sucesso!");
    });
});
*/

import * as fs from "node:fs/promises";
const dados = "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto "

fs.writeFile("./arquivo1.txt", dados)
.then(() =>{
    console.log("Arquivo gravado com sucesso!");
    return fs.writeFile("./arquivo2.txt", dados);
})

.then(() => {
    console.log("Gravado com sucesso!"); 
})

.catch((erro) => {
    console.log("Erro ao tentar grava arquivo!")
    console.log(erro);
})
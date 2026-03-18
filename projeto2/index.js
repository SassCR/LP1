import { emit } from 'cluster';
import { EventEmitter } from 'events'; //apenas puxando o eventEmitter
const emissorEvento = new EventEmitter();//Aqui ele tá criando um novo evento. 

function funcao1() {
    console.log("Ocorreu um evento!");
}
function funcao2() {
    console.log("Ocorreu outro evento!");
}
//registrando a função1 e função2 para o eventoUm
emissorEvento.on('eventoUm', funcao1)//aqui ele associa a função e já cria o evento, fazendo com que caso ocorra o evento seja disparado ele dispara as duas
emissorEvento.on('eventoUm', funcao2)//funções
//Emitindo/Chamando o evento "eventoUm"
emissorEvento.emit('eventoUm');

//removendo/Disvinculando a função1 do evento "eventoUm"
emissorEvento.off('eventoUm', funcao1);

emissorEvento.emit("eventoUm");

//Para estar criando um evento unico e Criando uma função anonima sem nome, para ser usada apenas uma vez. 
emissorEvento.once("eventoUnico", function () {
    console.log("Função unica");
});

//ou também pode criar usando arroy function
emissorEvento.once("eventoUnico2", () =>{
    console.log("Tu é homi");
    
})
//Ele aciona o evento unico e já remove seu listener.
emissorEvento.emit("eventoUnico");

//Adicionando função com 1 parametro
const boasVindas = (nome) => {
    console.log("Seja bem vindo!" + nome);
//  console.log(`Seja bem-vindo${nome}`); //Jeito de escrever uma string sem precisar acrescentar + nome, ai só colcoa ${}
}

emissorEvento.on("msBoasVindas", boasVindas);
//disparando o evento "msBoasVindas" passando como parametro nome a string "Cleiton"
emissorEvento;emit("msBoasVindas", "Cleiton");
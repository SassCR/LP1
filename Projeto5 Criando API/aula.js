const express = require("express")
const api = express()
api.use(express.json());
const porta = 13957
//IPv6 é todo estranho
//127.0.0.1:3000 ip de loopback

//https://
// Localhouset:3000 para não ter a necessidade de digitar sempre número por número do ip da maquina.
//Só colocando a porta e o Localhouset:Porta condigurada.

//CRUD de Pessoas/Produtos/Fotos 
//C=Create - Criar/Cadastrar foto/pessoa.(POST)
//R = Read - Ler/Puxar amizades/pessoas.(GET).
//U = UPDATE - Atualizar dados de uma postagem/pessoa.(PUT/PATCH)
//D = DELETE - Remover uma pessoa/foto/post.(DELETE)

//A diferença entre PUT e PATCH é que o Put ele solicita todos os dados, já p patch, só um dado


let pessoas = [
    { nome: "João", idade: 19 },
    { nome: "Maria", idade: 23 },
    { nome: "Pedro", idade: 65 },
    { nome: "Amanda", idade: 34 }
]

//---------------------------------------------------CRUD pessoas -----------------------------
//Read do CRUD
api.get('/pessoa', (requisicao, resposta) => {
    resposta.send(pessoas);
})
//=================================================================================================
//Create do CRUD                                 //Requisição é o usuario que envia, resposta é quando ele solicita algo
api.post('/pessoa', (requisicao, resposta) => { //O primeiro sempre será requisição e o outro resposta, não importa o nome, só que sempre será assim.
    //capturando dados enviados na requisição.
    const novaPessoa = requisicao.body;
    //na linha 37 estamos fazendo uma verificação para saber se o usuario ao fazer a requisição enviou nome e a idade da pessoa.
    if (!novaPessoa.nome || !novaPessoa.idade) {
        return resposta.send("ERRO! Informe o nome e a idade.")
    }
    //Caso tenha enviado tudo certinho vai executar a linha 41 em diante.
    //adicionando a pessoa no vetor
    pessoas.push(novaPessoa);
    resposta.send("SUCESSO! Pessoa cadastrada!")
})
//=================================================================================================
//Delete do CRUD
api.delete("/pessoa", (requisicao, resposta) => {
    const pessoaParaDeletar = requisicao.body
    //simulando que as pessoas tem ID no BD (Vetor pessoas)
    if (!pessoaParaDeletar.id) {
        return resposta.send("ERRO! Informe o ID!")
    }
    //Removendo do vetor pessoa a pessoa do indice passado como ID
    pessoas.splice(pessoaParaDeletar.id, 1)//Esse comando remover coisas do vetor/Caso ele de erro nesssa linha de codigo, ele vai quebra o resto e não vai continuar
    resposta.send("SUCESSO! Pessoa removida!")
})
//=================================================================================================
//Update do CRUD
api.put("/pessoa", (requisicao, resposta) => {
    const pessoaParaEditar = requisicao.body; //Sempre é necessário caso deseje mexer em algo.

    if (!pessoaParaEditar.id || !pessoaParaEditar.nome || !pessoaParaEditar.idade) {
        return  resposta.send("ERRO!: Informe as seguintes informaçãos nome, idade e ID!");
    }
    pessoas[pessoaParaEditar.id] = pessoaParaEditar;
    resposta.send("PESSOA EDITADA COM SUCESSO!")
})



//api.get ele só vai aceitar ler e puxar informações.
api.get("/Status", (req, res) => { //req= requisição. res= resposta, no / Precisa ter algo para localizar a API na localHost.
    res.send("API tá on.")//Enviando uma resposta usando o res..
})

api.listen(porta, () => { //Eu posso colocar apenas o número da porta sem a necessidade de criar uma variavel.
    console.log(`API tá rodando na porta ${porta}`);
})

//Caso eu queira usar essa api vou precisar usar o cors.
const express = require("express")
const api = express()
const porta = 3000
//IPv6 é todo estranho
//127.0.0.1:3000 ip de loopback

//https://
// Localhouset:3000 para não ter a necessidade de digitar sempre número por número do ip da maquina.
//Só colocando a porta e o Localhouset:Porta condigurada.

//CRUD de Pessoas/Produtos/Fotos 
//C=Create - Criar/Cadastrar foto/pessoa.(POST)
//R = Read - Ler/Puxar amizades/pessoas.(GET)
//U = UPDATE - Atualizar dados de uma postagem/pessoa.(PUT/PATCH)
//D = DELETE - Remover uma pessoa/foto/post.(DELETE)



api.get("/Status", (req, res) => { //req= requisição. res= resposta, no / Precisa ter algo para localizar a API na localHost.
    res.send("API tá on.")//Enviando uma resposta usando o res..
})

api.listen(porta, () => {
    console.log(`API tá rodando na porta ${porta}`);
})
const API_URL = "https://api.coinbase.com/v2/prices/BTC-BRL/buy"

//Função que busca na API e retorna o preço do Bitcoin em Reais

export const getBitcoinPrice = async () => { //async é para informa que a função vai ter um await

    const resposta = await fetch(API_URL); //await é para pode fazer esperar para executar o próximo
    // tem essa maneira: const data = await resposta.jason().data; 

    const { data } = await resposta.json(); //Dessa maneira apenas se a function que estamos pegando o conteudo tiver o mesmo nome da nossa variavel.
    const valorBitcoinEmReal = data.amount;
    return valorBitcoinEmReal
}
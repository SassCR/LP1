import { emissorEventos } from "./emissor_bitcoin.js";

const formato = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl'
})

//Criando   listenner/ouvinte para o evento "Valor do bitcoin."
emissorEventos.on('Valor_do_bitcoin', (preco) => {
    const precoFormatado = formato.format(preco);
    console.log(precoFormatado);
})

import cron from "node-cron";
import { getBitcoinPrice } from "./servicos_api.js";
import { EventEmitter } from "events";

const emissorEventos = new EventEmitter();

//A cada 10 segundos
const periodo = '*/10 * * * * *'

cron.schedule(periodo, async ( ) => {
    const preco = await getBitcoinPrice();
    emissorEventos.emit("Valor_do_bitcoin", preco)
})


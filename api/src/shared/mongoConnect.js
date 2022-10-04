import mongodb, { MongoClient } from 'mongodb';
import { run as runKafka, } from './kafkaSender.js';

const url = 'mongodb://127.0.0.1:27017/mykafka'
const client = new MongoClient(url)
async function run() {
    try {
        await runKafka()
        await client.connect()

    } catch (err) {
        console.error(err)
    }
}

export { client, run }
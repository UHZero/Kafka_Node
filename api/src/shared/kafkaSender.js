import { Kafka, Partitioners, } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'sender',
    brokers: ['localhost:9092'],
});

const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
const consumer = kafka.consumer({ groupId: 'test-group' })

async function run() {
    await producer.connect()
    await consumer.connect()
}

export {
    run,
    producer,
    consumer
}
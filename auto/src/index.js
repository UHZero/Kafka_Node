import { Kafka, Partitioners } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'receiver',
    brokers: ['localhost:9092']
})

const topic = 'product-issue';
const consumer = kafka.consumer({ groupId: 'receiver-group' });
const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })

async function run() {
    await consumer.connect()
    await producer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: ({ topic, partition, message }) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
            console.log(`- ${prefix} ${message.key}#${message.value}`)

            // const payload = JSON.parse(message.value)

            producer.send({
                topic: 'pdf-generator',
                messages: [
                    {
                        value: message.value
                    }
                ]
            })

        }
    })
}

run().catch(console.error)

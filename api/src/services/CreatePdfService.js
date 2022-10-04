import pdf from 'html-pdf'
import { consumer } from '../shared/kafkaSender.js';

export default class CreatePDFService {
    static async createPDF() {

        await consumer.run({
            eachMessage: ({ topic, partition, message }) => {
                const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
                console.log(`- ${prefix} ${message.key}#${message.value}`)

                const product = JSON.parse(message.value)

                const html = `<h1>${product.name}</h1>`

                var options = { format: 'A4' };
                pdf.create(html, options).toFile('./teste.pdf', function (err, res) {
                    if (err) return console.log(err);
                    console.log(res); // { filename: '/app/businesscard.pdf' }
                })
            }
        })
            .then(response => response)

    }
}
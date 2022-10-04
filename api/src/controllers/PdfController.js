import MongoRepository from "../repository/mongo/MongoRepository.js";
import CreatePDFService from "../services/CreatePdfService.js";

export default class pdfController {
    static async getPDF(req, res) {
        const { id } = req.params;
        const product = await MongoRepository.show(id)

        await req.producer.send({
            topic: 'product-issue',
            messages: [
                { value: JSON.stringify(product) }
            ]
        })

        await CreatePDFService.createPDF()
            .then(_ => res.json({ status: 'PDF has created!' }))
    }
}
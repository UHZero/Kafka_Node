import { Router } from "express";
import pdfController from "../controllers/PdfController.js";
import { consumer } from '../shared/kafkaSender.js';

async function runConsumer() {
    const topic = 'pdf-generator'
    await consumer.subscribe({ topic })
}

runConsumer().catch(console.error)

const pdfRoutes = Router()

pdfRoutes.get('/products/:id', pdfController.getPDF)

export default pdfRoutes
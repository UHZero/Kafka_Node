import express from 'express';
import { run } from './shared/mongoConnect.js';
import routes from './routes/routes.js'
import { producer, consumer } from './shared/kafkaSender.js'

const app = express()
app.use((req, res, next) => {
    req.producer = producer;
    res.consumer = consumer;
    next();
});

run().catch(console.error)

app.use(express.json())
app.use(routes)


app.listen(3333, () => console.log('the server running at 3333 port'))
import { Router } from "express";

import ProductsController from "../controllers/ProductsController.js";
import pdfRoutes from './createPDF.routes.js';

const routes = Router();

routes.use(pdfRoutes);

routes.post('/products', ProductsController.saveProduct);

routes.get('/products', ProductsController.listProduct);

routes.put('/products/:id', ProductsController.updateProduct);

routes.delete('/products/:id', ProductsController.removeProduct);

export default routes;
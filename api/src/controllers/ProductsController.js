import CreateProductService from "../services/CreateProductService.js";
import ListProductsService from "../services/ListProductService.js";
import RemoveProductService from "../services/RemoveProductService.js";
import UpdateProductService from "../services/UpdateProductService.js";

export default class ProductsController {
    static async saveProduct(req, res) {

        const { name, value, available } = req.body;

        try {
            await CreateProductService.execute(name, value, available)
                .then(response => res.status(204).json(response).end())
        } catch (e) {
            res.status(400).send(e.message)
        }

    }

    static async listProduct(req, res) {
        await ListProductsService().then(response => res.json(response))
    }

    static async updateProduct(req, res) {
        const { id } = req.params;

        const { name, value, available } = req.body;

        try {
            await UpdateProductService(id, name, value, available)
                .then(response => res.status(204).json(response).end())
        } catch (e) {
            res.status(400).send(e.message)
        }

    }

    static async removeProduct(req, res) {
        const { id } = req.params;

        try {
            await RemoveProductService(id).then(response => res.status(204).json(response).end())
        } catch (e) {
            res.status(404).send(e.message)
        }

    }
}
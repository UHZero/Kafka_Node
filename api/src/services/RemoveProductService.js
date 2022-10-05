import ProductRepository from "../repository/ProductRepository.js";

class RemoveProductService {

    static async execute(id) {
        const product = await ProductRepository.show(id);

        if (!id || !product) {
            throw new Error('Product not found!')
        };

        await ProductRepository.delete(id);
    }

}
export default RemoveProductService;
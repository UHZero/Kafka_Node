import ProductRepository from "../repository/ProductRepository.js"

class UpdateProductService {

    static async execute(id, name, value, available) {
        const product = await ProductRepository.show(id);

        if (!id || !product) {
            throw new Error('Product not found!')
        };

        const productNameExists = await ProductRepository.findByName(name)

        if (productNameExists) {
            throw new Error('This product name already in use!')
        };

        if (!value && value <= 0) {
            throw new Error('Product value is invalid!')
        };

        return await ProductRepository.put(id, name, value, available).then(response => response);
    }

}

export default UpdateProductService;
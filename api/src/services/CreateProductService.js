import ProductRepository from "../repository/ProductRepository.js"

class CreateProductService {

    static async execute(name, value, available) {
        if (!name || name == '') {
            throw new Error('Product name is required!')
        };

        const productExists = await ProductRepository.findByName(name);

        if (productExists) {
            throw new Error('This product name already in use!')
        };


        if (!value || value <= 0) {
            throw new Error('Incorrect product value!')
        };

        if (!available) {
            available = false
        };


        return await ProductRepository.create(name, value, available)
            .then(response => response);

    }

}

export default CreateProductService;
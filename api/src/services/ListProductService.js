import ProductRepository from "../repository/ProductRepository.js"

class ListProductsService {
    static async execute() {
        return await ProductRepository.list().then(response => response);
    }
};

export default ListProductsService;
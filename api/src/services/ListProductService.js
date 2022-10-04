import ProductRepository from "../repository/ProductRepository.js"

async function ListProductsService() {
    return await ProductRepository.list().then(response => response);
};

export default ListProductsService;
import ProductRepository from "../repository/ProductRepository.js";

async function RemoveProductService(id) {

    const product = await ProductRepository.show(id);

    if (!id || !product) {
        throw new Error('Product not found!')
    };

    await ProductRepository.delete(id);
}
export default RemoveProductService;
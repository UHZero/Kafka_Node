import FakeRepository from "./fake/FakeRepository.js";
import MongoRepository from "./mongo/MongoRepository.js";

const ProductRepository = process.env.NODE_ENV === 'test' ? FakeRepository : MongoRepository;

export default ProductRepository;
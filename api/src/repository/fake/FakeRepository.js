import { v4 as uuidv4 } from 'uuid';
let db = [];
class FakeRepository {
    static async create(name, value, available) {
        const product = {
            _id: uuidv4(),
            name,
            value,
            available
        }

        await db.push(product)

        return product
    }

    static async list() {
        return db
    }

    static async put(id, name, value, available) {
        const productIndex = db.findIndex(item => item._id === id)
        const product = db.find(item => item._id === id)
        product.name = name;
        product.value = value;
        product.available = available;
        db[productIndex] = product;
        return product;
    }

    static async delete(id) {
        const newDataBase = db.filter(itens => itens._id !== id)
        db = newDataBase
        return;
    }

    static async show(id) {
        const product = db.find(item => item._id === id);
        return product;
    }

    static async findByName(name) {
        const product = db.find(item => item.name === name);
        return product;
    }
}

export default FakeRepository;
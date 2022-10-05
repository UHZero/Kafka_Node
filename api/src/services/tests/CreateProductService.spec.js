import CreateProductService from '../CreateProductService';
import FakeRepository from '../../repository/fake/FakeRepository';
import axios from 'axios';

const request = function (url, method, data) {
    return axios({ url, method, data, validateStatus: false })
}

describe('Create Product', () => {
    it('should be able to create a product', async () => {
        const product = await CreateProductService.execute('Test', 1, true)
        const response = await request(`http://localhost:3333/products`, 'post', product)
        expect(product).toHaveProperty('_id');
        expect(response.status).toBe(204);
    })

    it('should not be able to create a product if product not have a name', async () => {
        const post = {
            name: '',
            value: 1
        }
        const response = await request(`http://localhost:3333/products`, 'post', post);
        expect(response.status).toBe(400);
        expect(CreateProductService.execute('', 1, true)).rejects.toBeInstanceOf(Error);
    })

    it('should not be able to create a product if product name already in use', async () => {
        await FakeRepository.create('Product 001', 1, true)

        expect(CreateProductService.execute('Product 001', 99, false)).rejects.toBeInstanceOf(Error);
    })

    it('should not be able to create a product if product value less than or equal 0', async () => {

        expect(CreateProductService.execute('Product 002', 0, false)).rejects.toBeInstanceOf(Error);
    })

    it('should be able to create a product and set available to false', async () => {
        const product = await CreateProductService.execute('Product 003', 2)

        expect(product.available).toEqual(false);
    })


})
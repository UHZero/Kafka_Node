import UpdateProductService from '../UpdateProductService';
import FakeRepository from '../../repository/fake/FakeRepository';
import axios from 'axios';

const request = function (url, method, data) {
    return axios({ url, method, data, validateStatus: false })
};

describe('Update Service', () => {
    it('should be able to update a product', async () => {
        const product = await FakeRepository.create('Product 00', 1, true);
        const { _id } = product
        const updateProduct = await UpdateProductService.execute(_id, 'Product 01', 99, true)
        expect(updateProduct.value).toEqual(99);
        // expect(response.status).toBe(200);
    })

    it('should not be able to update a product', async () => {
        const product = await FakeRepository.create('Product 00', 1, true);
        const { _id } = product

        expect(UpdateProductService.execute(_id, 'Product 00', 99, true)).rejects.toBeInstanceOf(Error);
        expect(UpdateProductService.execute(_id, 'Product 02', 0, true)).rejects.toBeInstanceOf(Error);
        expect(UpdateProductService.execute('78', 'Product 001', 1, false)).rejects.toBeInstanceOf(Error);

    })
})
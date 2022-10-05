import ListProductsService from '../ListProductService';
import FakeRepository from '../../repository/fake/FakeRepository';
import axios from 'axios';

const request = function (url, method, data) {
    return axios({ url, method, data, validateStatus: false })
}

describe('List Product', () => {
    it('should be able list products', async () => {
        await FakeRepository.create('Teste', 1, true);

        const response = await request(`http://localhost:3333/products`, 'get');

        expect(ListProductsService.execute()).toBeTruthy();
        expect(response.status).toBe(200);
    })
})
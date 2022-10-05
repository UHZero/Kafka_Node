import RemoveProductService from '../RemoveProductService';
import FakeRepository from '../../repository/fake/FakeRepository';
import axios from 'axios';

const request = function (url, method, data) {
    return axios({ url, method, data, validateStatus: false })
};

describe('Remove Product', () => {
    it('should be able to remove a product', async () => {
        const product = await FakeRepository.create('Juice', 2, true);
        const { _id } = product;

        expect(RemoveProductService.execute(_id)).toBeTruthy();
    })

    it('should be return status code 404', async () => {
        const _id = 5;
        const response = await request(`http://localhost:3333/products/${_id}`, 'delete');
        expect(response.status).toBe(404);
    })

    it('should not be able to delete a product', async () => {
        expect(RemoveProductService.execute('2')).rejects.toBeInstanceOf(Error);
    })
})
import CreateProductService from '../CreateProductService';

describe('Create Product', () => {
    it('should be able to create a product', async () => {
        const product = await CreateProductService.execute('Test', 1, true)
        expect(product).toHaveProperty('_id')
    })
})
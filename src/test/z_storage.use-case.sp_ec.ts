import { StorageUseCase } from "src/use-cases/storage/storage.use-case";
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
//break
describe('StorageUseCase', () => {
    let controller: StorageUseCase;
    let mockStorageUseCase: any;
    const mockProduct = {
        id: '1',
        name: 'Test Product',
        description: 'Test Product Description',
        price: 100,
    };
    const mockProductQuantities = {
        id: '1',
        product: mockProduct,
        quantity: 10
    }
    const mockStorage = {
        id: '1',
        longitude: 0,
        latitude: 0,
        tresholdDifference: 0.2,
        productQuantities: [mockProductQuantities],
    }
    const mockOtherStorage = {
        id: '2',
        longitude: 0,
        latitude: 0,
        tresholdDifference: 0.5,
        productQuantities: [mockProductQuantities],
    }

    describe('rebalancing', () => {
        it('should rebalance storages', async () => {
            // const objUseCase = new StorageUseCase();
            const result = [mockStorage, mockOtherStorage];
            mockStorageUseCase.rebalance.mockResolvedValue(result);
            expect(await StorageUseCase).toBe(result);
        });


    })

})
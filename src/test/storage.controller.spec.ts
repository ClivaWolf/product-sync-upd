import { Test, TestingModule } from '@nestjs/testing';
import { StorageController } from '../controllers/storage.controller';
import { StorageUseCase } from '../use-cases/storage/storage.use-case';
import { ProductQuantities } from 'src/core';

describe('StorageController', () => {
  let controller: StorageController;
  let mockStorageUseCase: any;
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'Test Product Description',
    price: 100,
  };
  const mockProductQuantities ={
    id: '1',
    product: mockProduct,
    quantity: 10
  }

  beforeEach(async () => {
    mockStorageUseCase = {
      getAll: jest.fn(),
      get: jest.fn(),
      create: jest.fn(),
      // update: jest.fn(),
      // delete: jest.fn(),
      addProductQuantity: jest.fn(),
      rebalance: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageController],
      providers: [
        {
          provide: StorageUseCase,
          useValue: mockStorageUseCase,
        },
      ],
    }).compile();

    controller = module.get<StorageController>(StorageController);
  });

  describe('getAll', () => {
    it('should return all storages quantities', async () => {
      const result = [{ id: '1', name: 'Test Storage' }];
      mockStorageUseCase.getAll.mockResolvedValue(result);

      expect(await controller.getAll()).toBe(result);
    });
  });

  describe('get', () => {
    it('should return a single storage quantities', async () => {
      const result = { id: '1', name: 'Test Storage' };
      mockStorageUseCase.get.mockResolvedValue(result);

      expect(await controller.get('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a storage quantities', async () => {
      const dto = { productQuantities: [mockProductQuantities]};
      const result = { ...dto, id: '2' };
      mockStorageUseCase.create.mockResolvedValue(result);

      expect(await controller.create(dto)).toBe(result);
    });
  });

  describe('addProductQuantity', () => {
    it('should add a product quantity to a storage', async () => {
      const storageId = '1';
      const productQuantityId = '2';
      const result = { id: '2', name: 'Test Storage' };
      mockStorageUseCase.addProductQuantity.mockResolvedValue(result);

      expect(await controller.addProductQuantity(storageId, productQuantityId)).toBe(result);
    });
  });

  describe('rebalance', () => {
    it('should rebalance a storage quantities', async () => {
      const storageId = '1';
      const withOtherStorageId = '2';
      const dto = { productQuantities: [mockProductQuantities]};
      const result = { ...dto, id: '2' };
      mockStorageUseCase.rebalance.mockResolvedValue(result);

      expect(await controller.rebalance(storageId, withOtherStorageId, dto)).toBe(result);
    });
  });

  // describe('update', () => {
  //   it('should update a storage quantities', async () => {
  //     const id = '1';
  //     const dto = { storage: mockStorage, quantity: 25 };
  //     const result = { ...dto, id };
  //     mockStorageUseCase.update.mockResolvedValue(result);

  //     expect(await controller.update(id, dto)).toBe(result);
  //   });
  // });

  // describe('delete', () => {
  //   it('should delete a storage quantities', async () => {
  //     const id = '1';
  //     mockStorageUseCase.delete.mockResolvedValue(id);

  //     expect(await controller.delete(id)).toBe(id);
  //   });
  // });

});
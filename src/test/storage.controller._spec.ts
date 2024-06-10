import { Test, TestingModule } from '@nestjs/testing';
import { ProductQuantitiesController } from '../controllers/productQuantities.controller';
import { ProductQuantitiesUseCase } from '../use-cases/productQuantities/productQuantities.use-case';

describe('ProductQuantitiesController', () => {
  let controller: ProductQuantitiesController;
  let mockProductQuantitiesUseCase: any;
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'Test Product Description',
    price: 100,
  };

  beforeEach(async () => {
    mockProductQuantitiesUseCase = {
      getAll: jest.fn(),
      get: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      merge: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductQuantitiesController],
      providers: [
        {
          provide: ProductQuantitiesUseCase,
          useValue: mockProductQuantitiesUseCase,
        },
      ],
    }).compile();

    controller = module.get<ProductQuantitiesController>(ProductQuantitiesController);
  });

  describe('getAll', () => {
    it('should return all products quantities', async () => {
      const result = [{ id: '1', name: 'Test Product' }];
      mockProductQuantitiesUseCase.getAll.mockResolvedValue(result);

      expect(await controller.getAll()).toBe(result);
    });
  });

  describe('get', () => {
    it('should return a single product quantities', async () => {
      const result = { id: '1', name: 'Test Product' };
      mockProductQuantitiesUseCase.get.mockResolvedValue(result);

      expect(await controller.get('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a product quantities', async () => {
      const dto = { product: mockProduct, quantity: 10 };
      const result = { ...dto, id: '2' };
      mockProductQuantitiesUseCase.create.mockResolvedValue(result);

      expect(await controller.create(dto)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a product quantities', async () => {
      const id = '1';
      const dto = { product: mockProduct, quantity: 25 };
      const result = { ...dto, id };
      mockProductQuantitiesUseCase.update.mockResolvedValue(result);

      expect(await controller.update(id, dto)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete a product quantities', async () => {
      const id = '1';
      mockProductQuantitiesUseCase.delete.mockResolvedValue(id);

      expect(await controller.delete(id)).toBe(id);
    });
  });

  describe('merge', () => {
    it('should merge two product quantities', async () => {
      const id = '1';
      const otherId = '2';
      const dto = { quantity: 50 };
      const result = { ...dto, id };
      mockProductQuantitiesUseCase.merge.mockResolvedValue(result);

      expect(await controller.merge(id, otherId, dto)).toBe(result);
    });
  });
});
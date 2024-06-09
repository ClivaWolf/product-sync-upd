import { Test, TestingModule } from '@nestjs/testing';
import { ProductQuantitiesController } from '../controllers/productQuantities.controller';
import { ProductQuantitiesUseCase } from '../use-cases/productQuantities/productQuantities.use-case';

describe('ProductController', () => {
  let controller: ProductQuantitiesController;
  let mockProductQuantitiesUseCase: any;

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
    it('should return all products', async () => {
      const result = [{ id: '1', name: 'Test Product' }];
      mockProductQuantitiesUseCase.getAll.mockResolvedValue(result);

      expect(await controller.getAll()).toBe(result);
    });
  });

  describe('get', () => {
    it('should return a single product', async () => {
      const result = { id: '1', name: 'Test Product' };
      mockProductQuantitiesUseCase.get.mockResolvedValue(result);

      expect(await controller.get('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a product', async () => {
      const dto = { product: 'test-product', quantity: 10 };
      const result = { ...dto, id: '2' };
      mockProductQuantitiesUseCase.create.mockResolvedValue(result);

      expect(await controller.create(dto)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const id = '1';
      const dto = { name: 'Updated Product', price: 200 };
      const result = { ...dto, id };
      mockProductQuantitiesUseCase.update.mockResolvedValue(result);

      expect(await controller.update(id, dto)).toBe(result);
    });
  });
});
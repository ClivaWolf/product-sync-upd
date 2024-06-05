import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../controllers/product.controller';
import { ProductUseCase } from '../use-cases/product/product.use-case';

describe('ProductController', () => {
  let controller: ProductController;
  let mockProductUseCase: any;

  beforeEach(async () => {
    mockProductUseCase = {
      getAll: jest.fn(),
      get: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductUseCase,
          useValue: mockProductUseCase,
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  describe('getAll', () => {
    it('should return all products', async () => {
      const result = [{ id: '1', name: 'Test Product' }];
      mockProductUseCase.getAll.mockResolvedValue(result);

      expect(await controller.getAll()).toBe(result);
    });
  });

  describe('get', () => {
    it('should return a single product', async () => {
      const result = { id: '1', name: 'Test Product' };
      mockProductUseCase.get.mockResolvedValue(result);

      expect(await controller.get('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a product', async () => {
      const dto = { name: 'New Product', price: 100, description: 'Test description' };
      const result = {...dto, id: '2' };
      mockProductUseCase.create.mockResolvedValue(result);

      expect(await controller.create(dto)).toBe(result);
    }); 
  });

  describe('update', () => {
    it('should update a product', async () => {
      const id = '1';
      const dto = { name: 'Updated Product', price: 200 };
      const result = {...dto, id };
      mockProductUseCase.update.mockResolvedValue(result);

      expect(await controller.update(id, dto)).toBe(result);
    });
  });
});
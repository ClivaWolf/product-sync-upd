import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, Delivery, IDataServices, IGenericRepository, Order, Product, ProductQuantities, Storage } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { ProductDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap {
  products: MongoGenericRepository<Product>;
  customers: IGenericRepository<Customer>;
  productQuantities: IGenericRepository<ProductQuantities>;

  storages: IGenericRepository<Storage>;
  orders: IGenericRepository<Order>;
  deliveries: IGenericRepository<Delivery>;


  constructor(
    @InjectModel(Product.name)
    private ProductRepository: Model<ProductDocument>,
    @InjectModel(ProductQuantities.name)
    private ProductQuantitiesRepository: Model<ProductQuantities>,
  ) { }

  onApplicationBootstrap() {
    this.products = new MongoGenericRepository<Product>(this.ProductRepository);
    this.productQuantities = new MongoGenericRepository<ProductQuantities>(this.ProductQuantitiesRepository);
  }
}

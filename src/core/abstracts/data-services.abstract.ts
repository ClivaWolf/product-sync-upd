import { Customer, Product, ProductQuantities } from '../entities'
import { IGenericRepository } from './generic-repo.abstract'

export abstract class IDataServices {
    abstract customers: IGenericRepository<Customer>;

    abstract products: IGenericRepository<Product>;

    abstract productQuantities: IGenericRepository<ProductQuantities>;
}
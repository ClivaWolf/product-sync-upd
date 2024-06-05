import { Customer, Product, ProductQuantities } from '../entities'
import { IGenericRepository } from './generic-repo.abstract'

export abstract class IDataServices {
    abstract products: IGenericRepository<Product>;
    
    abstract customers: IGenericRepository<Customer>;

    abstract productQuantities: IGenericRepository<ProductQuantities>;
}
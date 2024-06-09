import { Customer, Product, ProductQuantities, Storage, Order, Delivery } from '../entities'
import { IGenericRepository } from './generic-repo.abstract'

export abstract class IDataServices {
    abstract products: IGenericRepository<Product>;
    
    abstract customers: IGenericRepository<Customer>;

    abstract productQuantities: IGenericRepository<ProductQuantities>;

    abstract storages: IGenericRepository<Storage>;

    abstract orders: IGenericRepository<Order>;

    abstract deliveries: IGenericRepository<Delivery>;
}
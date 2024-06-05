import { Product } from "src/domain/entities/product";

export interface IProductRepository {
    create(product: Product): Promise<boolean>;

    find(id: string): Promise<Product>;

    update(product: Product): Promise<boolean>;

    delete(id: string): Promise<boolean>;
}
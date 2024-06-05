import { Product } from "./product";

interface IProductQuantities {
    id: string;
    quantity: number;
    products: Product[];
}

export class ProductQuantities implements IProductQuantities {
    constructor(
        public id: string,
        public quantity: number,
        public products: Product[]
    ) {}
}
import { IProduct } from "../entities/product";

export class ProductQuantitiesDto {
    constructor(
        public id: string,
        public quantity: number,
        public products: IProduct[]
    ) { }
}
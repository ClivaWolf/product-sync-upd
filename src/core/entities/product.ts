export interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    quantityId: string;
}

export class Product implements IProduct {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public description: string,
        public quantityId: string
    ) {}
}
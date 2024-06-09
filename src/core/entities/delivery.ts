import { ProductQuantities } from "./productQuantities";
import { Storage } from "./storage";

export class Order  {
        public id: string;
        
        public fromStorage: Storage;

        public ProductQuantities: ProductQuantities[];
}
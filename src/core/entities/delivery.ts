import { ProductQuantities } from "./productQuantities";
import { Storage } from "./storage";

export class Delivery  {
        public id: string;
        
        public fromStorage: Storage;

        public ProductQuantities: ProductQuantities[];
}
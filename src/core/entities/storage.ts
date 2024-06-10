import { Order } from "./order";
import { ProductQuantities } from "./productQuantities";

export class Storage  {
        public id: string;
        
        public productQuantities: ProductQuantities[]|string[];

        // public orders: Order[];
}
import { Order } from "./order";
import { ProductQuantities } from "./productQuantities";

export class Storage  {
        public id: string;
        
        public productQuantities: ProductQuantities[];

        //for demonstration
        latitude: number;

        longitude: number;

        tresholdDifference: number;

        // public orders: Order[];
}
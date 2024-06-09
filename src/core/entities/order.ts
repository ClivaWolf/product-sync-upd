import { Delivery } from "./delivery";
import { Storage } from "./storage";

export class Order  {
        public id: string;
        
        public storage: Storage;

        public delivery: Delivery;
}
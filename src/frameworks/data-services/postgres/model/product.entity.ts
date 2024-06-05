import { ProductQuantities } from "./productQuantities.entity";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Product  {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column(type => ProductQuantities)
    productQuantities: ProductQuantities;
}
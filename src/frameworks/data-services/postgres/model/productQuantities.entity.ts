import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';


@Entity()
export class ProductQuantities  {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    quantity: number;

    @Column(type => Product)
    products: Product[];
}
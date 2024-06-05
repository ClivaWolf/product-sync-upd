import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductQuantities } from 'src/core';


@Schema()
export class ProductForScheme extends Product {
  @Prop({ required: true })
  id: string;
  
  @Prop({ required: true })
  name: string;
  
  @Prop({ required: true })
  price: number;
  
  @Prop({ required: true })
  description: string;
  
  @Prop({ required: true })
  productQuantities: ProductQuantities;
}

export type ProductDocument = ProductForScheme & Document;

export const ProductSchema = SchemaFactory.createForClass(ProductForScheme);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProductQuantities } from 'src/core';


@Schema()
export class ProductQuantitiesForScheme extends ProductQuantities {
  // @Prop({ required: true })
  // id: string;
  
  @Prop({ required: true })
  quantity: number;
  
  @Prop({ required: true })
  product: string;
}

export type ProductQuantitiesDocument = ProductQuantitiesForScheme & Document;

export const ProductQuantitiesSchema = SchemaFactory.createForClass(ProductQuantitiesForScheme);

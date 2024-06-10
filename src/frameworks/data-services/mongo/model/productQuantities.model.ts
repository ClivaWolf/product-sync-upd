import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ProductQuantities } from 'src/core';
import { ProductForScheme } from './product.model';


@Schema()
export class ProductQuantitiesForScheme extends ProductQuantities {
  // @Prop({ required: true })
  // id: string;
  
  @Prop({ required: true })
  quantity: number;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Product', required: true })
  product: ProductForScheme;
}

export type ProductQuantitiesDocument = ProductQuantitiesForScheme & Document;

export const ProductQuantitiesSchema = SchemaFactory.createForClass(ProductQuantitiesForScheme);

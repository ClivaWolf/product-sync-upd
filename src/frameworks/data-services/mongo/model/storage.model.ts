import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Storage } from 'src/core';
import { ProductQuantitiesForScheme } from './productQuantities.model';


@Schema()
export class StorageForScheme extends Storage {

  @Prop({ type: mongoose.Schema.Types.Array, ref : 'ProductQuantities', required: true })
  productQuantities: ProductQuantitiesForScheme[];

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  tresholdDifference: number;
}

export type StorageDocument = StorageForScheme & Document;

export const StorageSchema = SchemaFactory.createForClass(StorageForScheme);

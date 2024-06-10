import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices, Product, ProductQuantities, Storage } from '../../../core';
import { DATA_BASE_CONFIGURATION } from './config';
import { ProductQuantitiesSchema, ProductSchema, } from './model';
import { MongoDataServices } from './mongo-data-services.service';
import { StorageSchema } from './model/storage.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductQuantities.name, schema: ProductQuantitiesSchema },
      { name: Storage.name, schema: StorageSchema}
    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule { }

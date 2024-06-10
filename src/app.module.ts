import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { StorageController, ProductQuantitiesController, ProductController } from './controllers';
import { ProductUseCasesModule } from './use-cases/product/product-use-case.module';
import { ProductQuantitiesUseCasesModule } from './use-cases/productQuantities/productQuantities-use-case.module';
import { StorageUseCasesModule } from './use-cases/storage/storage-use-case.module';

@Module({
  imports: [
    DataServicesModule,
    ProductUseCasesModule,
    ProductQuantitiesUseCasesModule,
    StorageUseCasesModule
  ],
  controllers: [
    AppController,
    ProductController,
    ProductQuantitiesController,
    StorageController
  ],
  providers: [],
})
export class AppModule { }

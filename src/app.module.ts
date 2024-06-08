import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ProductController } from './controllers/product.controller';
import { ProductUseCasesModule } from './use-cases/product/product-use-case.module';

@Module({
  imports: [
    DataServicesModule,
    ProductUseCasesModule
  ],
  controllers: [
    AppController,
    ProductController
  ],
  providers: [],
})
export class AppModule { }

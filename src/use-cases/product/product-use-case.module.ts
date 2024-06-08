import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ProductFactoryService } from './product-factory.service';
import { ProductUseCase } from './product.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ProductFactoryService, ProductUseCase],
  exports: [ProductFactoryService, ProductUseCase],
})
export class ProductUseCasesModule {}

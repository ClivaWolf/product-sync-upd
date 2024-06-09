import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { ProductQuantitiesFactoryService } from './productQuantities-factory.service';
import { ProductQuantitiesUseCase } from './productQuantities.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ProductQuantitiesFactoryService, ProductQuantitiesUseCase],
  exports: [ProductQuantitiesFactoryService, ProductQuantitiesUseCase],
})
export class ProductQuantitiesUseCasesModule {}

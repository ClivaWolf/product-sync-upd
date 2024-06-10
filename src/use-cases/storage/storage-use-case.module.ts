import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { StorageFactoryService } from './storage-factory.service';
import { StorageUseCase } from './storage.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [StorageFactoryService, StorageUseCase],
  exports: [StorageFactoryService, StorageUseCase],
})
export class StorageUseCasesModule {}

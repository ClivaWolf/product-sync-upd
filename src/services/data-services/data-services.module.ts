import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../frameworks/data-services/mongo/mongo-data-services.module';
import { PostgresDataServicesModule } from 'src/frameworks/data-services/postgres/postgres-data-services.module';

@Module({
  imports: [MongoDataServicesModule],//,PostgresDataServicesModule],
  exports: [MongoDataServicesModule]//,PostgresDataServicesModule],
})
export class DataServicesModule {}

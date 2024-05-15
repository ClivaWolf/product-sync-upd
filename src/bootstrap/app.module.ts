import { Module } from '@nestjs/common';
import { AppController } from '../app/rest-api-adapter/controller/app.controller';
import { AppService } from '../domain/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

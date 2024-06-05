import { Module } from '@nestjs/common';
import { AppController } from './app/rest-api-adapter/controller/app.controller';

@Module({
  imports: [],
  controllers: [
    AppController
  ],
  providers: [],
})
export class AppModule { }

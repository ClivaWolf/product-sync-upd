import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../../bootstrap/app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello';
  }
}

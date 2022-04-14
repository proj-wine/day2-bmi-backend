import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  calculateBMI(@Query('weight') weight, @Query('height') height) {
    return {
      result: this.appService.calculateBMI(weight, height),
    };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calculateBMI(weight: number, height: number) {
    return Math.round((weight / Math.pow(height / 100, 2)) * 100) / 100;
  }
}

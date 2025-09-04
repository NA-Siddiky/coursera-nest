import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
  getSum(a: number, b: number) {
    return a + b;
  }
}

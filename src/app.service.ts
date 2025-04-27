import { Injectable } from '@nestjs/common';

// 비즈니스 로직 실행
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getHi(): string {
    return 'Hi Nest!';
  }
}

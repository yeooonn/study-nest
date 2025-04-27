import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // 클라이언트 요청(url)을 받아 해당 함수를 실행험
  providers: [], // 실행할 비즈니스 로직(함수)을 정의하고 관리함
})
export class AppModule {}

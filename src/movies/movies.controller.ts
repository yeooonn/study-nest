import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './create-movie.dto';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') serachingYear: string) {
    return `We are searching for a movie made after: ${serachingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movies with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with id: ${movieId}`;
  }

  @Put(':id')
  patch(@Param('id') movieId: string, @Body() updateData: CreateMovieDto) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/userName')
  getQueryString(
    @Query('name') userName: string,
    @Query('age') userAge: number
  ): string {
    console.log('Received User Name:', userName);
    console.log('Received User Age:', userAge);
    return `Hello, ${userName}! You are ${userAge} years old.`;
  }

  @Get('/askQuestion')
  askQuestion(): string {
    return "How are you?";
  }
 
  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto): string {
    console.log('Received answer:', getAnswerDto.answer);
    return `Answer: ${getAnswerDto.answer}`;
  }

  @Get(':id')
  getRouteParam(@Param('id') userId: string): string {
    console.log('Received User ID:', userId);
    return `User ID: ${userId}`;
  }

}

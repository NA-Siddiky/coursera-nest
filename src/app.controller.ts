import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/response')
  getResponse(@Req() req, @Res() res) {
    // console.log(req.headers);
    // console.log(res);
    // return res.send('Hello Nest');
    res.status(200).json({ res: 'Hello Nest' });
  }

  @Get('/userName')
  getQueryString(
    @Query('name') userName: string,
    @Query('age') userAge: number,
  ): string {
    console.log('Received User Name:', userName);
    console.log('Received User Age:', userAge);
    return `Hello, ${userName}! You are ${userAge} years old.`;
  }

  @Get('/askQuestion')
  askQuestion(): string {
    return 'How are you?';
  }

  // @Post('/answer')
  // answer(@Body() getAnswerDto: AnswerDto): string {
  //   console.log('Received answer:', getAnswerDto.answer);
  //   return `Answer: ${getAnswerDto.answer}`;
  // }

  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto, @Req() req, @Res() res) {
    let response;
    let status;
    if (req.body.answer === 'yes') {
      response = `You answered yes!`;
      status = 200;
    } else {
      response = `You answered no!`;
      status = 400;
    }
    res.status(status).json({
      res: response,
    });
  }

  @Get(':id')
  getRouteParam(@Param('id') userId: string): string {
    console.log('Received User ID:', userId);
    return `User ID: ${userId}`;
  }
}

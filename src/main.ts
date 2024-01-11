import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { InternalServerErrorException } from '@nestjs/common'
import mongoose from 'mongoose';
import 'dotenv/config'
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.use(cookieParser());

  try {

    await mongoose.connect(process.env.MONGO_URL);  //db connection 
    await app.listen(process.env.PORT);

  }
  catch (err) {
    console.log(err)
    throw new InternalServerErrorException()
  }
  console.log("Listening to Port : ", process.env.PORT)

}

bootstrap();

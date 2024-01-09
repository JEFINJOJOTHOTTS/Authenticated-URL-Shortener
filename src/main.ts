import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InternalServerErrorException } from '@nestjs/common'
import mongoose from 'mongoose';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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

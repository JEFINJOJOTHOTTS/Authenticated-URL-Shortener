import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignUpController } from './components/sign-up/sign-up.controller';
import { ComponentsModule } from './components/users.module';

@Module({
  imports: [ComponentsModule],
  controllers: [AppController, SignUpController],
  providers: [AppService],
})
export class AppModule {}

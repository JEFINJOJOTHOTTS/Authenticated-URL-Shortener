import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/user/users.module';

@Module({
  imports: [ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

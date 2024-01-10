import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/user/users.module';
import { UrlModule } from './components/url/url.module';

@Module({
  imports: [ComponentsModule, UrlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

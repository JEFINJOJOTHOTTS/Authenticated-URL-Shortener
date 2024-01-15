import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/user/users.module';
import { UrlModule } from './components/url/url.module';
import { UrlService } from './dbsrvs/srv/url/url.service';
import {RouterModule} from '@nestjs/core'
@Module({
  imports: [ComponentsModule, UrlModule, RouterModule.register([{
    path: 'minify-url',
    module: UrlModule,
  },])],
  controllers: [AppController],
  providers: [AppService, UrlService],
})
export class AppModule { }

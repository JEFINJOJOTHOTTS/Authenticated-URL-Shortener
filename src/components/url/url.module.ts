import { Module } from '@nestjs/common';
import { MinifyUrlController } from './minify/minify-url/minify-url.controller';
import { MinifyUrlService } from './minify/minify-url/minify-url.service';
import {UrlService} from 'src/dbsrvs/srv/url/url.service';

@Module({
  controllers: [MinifyUrlController],
  providers: [MinifyUrlService,UrlService],

})
export class UrlModule {}

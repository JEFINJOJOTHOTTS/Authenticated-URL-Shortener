import { Module } from '@nestjs/common';
import { MinifyUrlController } from './minify/minify-url/minify-url.controller';
import { MinifyUrlService } from './minify/minify-url/minify-url.service';

@Module({
  controllers: [MinifyUrlController],
  providers: [MinifyUrlService]
})
export class UrlModule {}

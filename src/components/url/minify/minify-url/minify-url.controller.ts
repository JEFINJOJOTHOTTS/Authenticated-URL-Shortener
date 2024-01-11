import { Controller, Get, Res,Post } from '@nestjs/common';
import { Response } from 'express';
import { MinifyUrlService } from './minify-url.service';
@Controller('minify-url')

export class MinifyUrlController {
    constructor(private minifyURLService: MinifyUrlService) { }

    @Get()
    async getUser(@Res() res: Response) {
        const urls = await this.minifyURLService.getUser()
        return res.render(
            'minify-url',
            { message: null },
        );
    }

    @Post()
    async postMiniUrl(@Res() res: Response) {
        await this.minifyURLService.getUser()
        return res.render(
            'minify-url',
            { message: null },
        );
    }



}

import { Controller, Get, Res, Post, UseGuards, Body } from '@nestjs/common';
import { Response } from 'express';
import { MinifyUrlService } from './minify-url.service';
import { AuthGuard } from 'src/components/user/auth/auth.guard';
import { UserInfo } from 'src/dto/schema/signup';

@Controller('minify-url')

export class MinifyUrlController {
    constructor(private minifyURLService: MinifyUrlService) { }

    @UseGuards(AuthGuard)
    @Get()
    async getUser(@Body() body: any,@Res() res: Response,) {
        const urlsData = await this.minifyURLService.getUser(body.user.userId)

        console.log(urlsData.urls)
        return res.render(
            'minify-url',
            { urlsData: urlsData.urls },
        );
    }

    @UseGuards(AuthGuard)
    @Post()
    async postMiniUrl(@Body() body: any, @Res() res: Response) {
        
        await this.minifyURLService.postUrl(body.user.userId, body.url)
        console.log("dhhhhhhhh")

        return res.redirect('/minify-url');
    }

    



}

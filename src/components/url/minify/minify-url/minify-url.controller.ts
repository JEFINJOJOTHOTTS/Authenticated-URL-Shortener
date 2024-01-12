import { Controller, Get, Res, Post, UseGuards, Body, Param, Patch, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { MinifyUrlService } from './minify-url.service';
import { AuthGuard } from 'src/components/user/auth/auth.guard';

@Controller('minify-url')

export class MinifyUrlController {
    constructor(private minifyURLService: MinifyUrlService) { }

    @UseGuards(AuthGuard)
    @Get()
    async getUser(@Body() body: any, @Res() res: Response,) {
        const urlsData = await this.minifyURLService.getUser(body.user.userId)

        return res.render(
            'minify-url',
            { urlsData: urlsData },
        );
    }

    @UseGuards(AuthGuard)
    @Post()
    async postMiniUrl(@Body() body: any, @Res() res: Response) {

        await this.minifyURLService.postUrl(body.user.userId, body.url)
        return res.redirect('/minify-url');
    }

    @UseGuards(AuthGuard)
    @Get(':miniUrl')
    async getUrl(@Param() miniUrl: string, @Body() body: any, @Res() res: Response) {
        const response = await this.minifyURLService.getUrl(body.user.userId, { miniUrl });
        const url = response[0]['urls'][0].url;
        res.redirect(url)
    }

    @UseGuards(AuthGuard)
    @Patch(':miniUrl')
    async updateUrlArray(@Param() miniUrl:any, @Body() body: any) {
        console.log("miniUrl", miniUrl)
        const response = await this.minifyURLService.deleteUrl(body.user.userId, miniUrl.miniUrl );
        if (response.modifiedCount !== 1) {
            throw new BadRequestException('unable to remove url');
        } else {
            return { status: 'Success', message: 'Url removed successfully' };
        }
    }
}







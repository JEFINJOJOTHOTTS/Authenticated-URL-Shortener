import { Controller ,Get, Res} from '@nestjs/common';
import { Response } from 'express';
import { MinifyUrlService } from './minify-url.service';
@Controller('minify-url')

export class MinifyUrlController {
    constructor(private minifyURLService:MinifyUrlService){}

    @Get()
    loadSignUp(@Res() res: Response) {

        return res.render(
            'minify-url',
            { message: null },
        );
    }


}

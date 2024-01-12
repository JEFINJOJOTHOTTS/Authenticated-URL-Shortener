import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('logout')
export class LogoutController {
    @Get()
    loadLogin(@Res() res: Response) {

        res.cookie('jwt', '', { maxAge: 1 })

        res.redirect('/login')
    }

}

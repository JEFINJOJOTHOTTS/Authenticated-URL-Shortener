import { Controller, HttpStatus, HttpCode, Get, Post, Body, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service'
import { UserInfo } from 'src/dto/schema/signUp';
import { AuthGuard } from '../auth/auth.guard';

@Controller('login')
export class LoginController {
    constructor(private loginServices: LoginService) { }

    //create user
    // @HttpCode(HttpStatus.OK)
    @Post()
    async loginPost(@Body() body: UserInfo, @Res() res) {
        const token = await this.loginServices.loginPost(body);
        await res.cookie('jwt', token.access_token, { httpOnly: true, maxAge: 60 * 60 * 100 * 1000 });//jwt Token stored in cookie

        console.log("token  ---   ", token)
        res.json();

    }
    // return JSON.parse(JSON.stringify(newUser));

    // load signUp page
    // @UseGuards(AuthGuard)
    @Get()
    loadLogin(@Res() res: Response) {

        return res.render(
            'login',
            { message: null },
        );
    }




}

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
    async loginPost(@Body() body: UserInfo,@Res() res) {
        const token = await this.loginServices.loginPost(body);
      // Set the token in the 'Authorization' header
      res.header('Authorization', `Bearer ${token.access_token}`);

        res.locals.jwt = token
        console.log("token  ---   ", token)
        // return token.access_token
        res.status(200).send({ access_token: token.access_token });

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

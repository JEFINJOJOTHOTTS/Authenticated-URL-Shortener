import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service'
import { UserInfo } from 'src/dto/schema/signUp';

@Controller('login')
export class LoginController {
    constructor(private loginServices: LoginService) { }

    // load signUp page
    @Get()
    loadLogin(@Res() res: Response) {

        return res.render(
            'login',
            { message: null },
        );
    }

    //create user
    @Post()
    async loginPost(@Body() body: UserInfo):Promise<void> {
        await this.loginServices.loginPost(body);
        return 
        // return JSON.parse(JSON.stringify(newUser));
    }


}

import { Controller, Get, Post, Body, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { SignUpService } from './sign-up.service'
import { UserInfo } from 'src/dto/schema/signUp';

@Controller('signup')
export class SignUpController {

    constructor(private signupServices: SignUpService) { }

    // load signUp page
    @Get()
    loadSignUp(@Res() res: Response) {
       
        return res.render(
            'register',
            { message: null },
        );
    }
    
    //create user
    @Post()
    async createUser(@Body() body: UserInfo) {
        const newUser = await this.signupServices.createUser(body);
        return JSON.parse(JSON.stringify(newUser));
    }


}

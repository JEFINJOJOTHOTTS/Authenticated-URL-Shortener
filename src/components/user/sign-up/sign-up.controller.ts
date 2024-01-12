import { Controller, Get, Post, Body, Res, UseGuards } from '@nestjs/common';
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
    async signUpPost(@Body() body: UserInfo): Promise<void> {
        await this.signupServices.signUpPost(body);
        return
    }


}

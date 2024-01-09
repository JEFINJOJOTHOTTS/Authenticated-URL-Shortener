import { Controller, Get } from '@nestjs/common';
import{SignUpService} from './sign-up.service'

@Controller('signup')
export class SignUpController {

    constructor(private signupServices:SignUpService){}
    // load signUp page
    @Get()
    loadSignup():string {
       return this.signupServices.loadSignup()
    }


}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserInfo } from 'src/dto/schema/signUp';
import { UsersService } from 'src/dbsrvs/srv/users/users.service';

@Injectable()
export class LoginService {
    constructor(private userSrv: UsersService) { }


    async loginPost(userData: UserInfo) {
        const userExist = await this.userSrv.findUser(userData.mail);
        if (userExist == null) {
            console.log('User Does not Exist')
            throw new UnauthorizedException
                ('User Does not Exist');
        } else {
            console.log('userData',userData)
            console.log('llllllllllllllllllllll')
            console.log('userExist', userExist)
            const status = await this.userSrv.passwordCompare(userExist, userData)
            if (status) {
                return
            } else {
                console.log('User Does not Exist')
          
                throw new UnauthorizedException
                    ('Incorrect Email or Password ');

            }
        }
        
    }

}

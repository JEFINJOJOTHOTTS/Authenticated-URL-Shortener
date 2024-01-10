import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserInfo } from 'src/dto/schema/signUp';
import { UsersService } from 'src/dbsrvs/srv/users/users.service';
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class LoginService {
    constructor(private userSrv: UsersService, private jwtService: JwtService
    ) { }


    async loginPost(userData: UserInfo) {
        const userExist = await this.userSrv.findUser(userData.mail);
        if (userExist == null) {
            console.log('User Does not Exist')
            throw new UnauthorizedException
                ('User Does not Exist');
        } else {
            const status = await this.userSrv.passwordCompare(userExist, userData)
            if (status) {
                const payload = { sub: userExist.userId, username: userData.mail };
                return {
                    access_token: await this.jwtService.signAsync(payload),
                }
                // await this.jwtService.signAsync(payload),
                //   return
            } else {
                console.log('User Does not Exist')

                throw new UnauthorizedException
                    ('Incorrect Email or Password ');

            }
        }

    }

}

import { Injectable,UnauthorizedException} from '@nestjs/common';
import { UserInfo } from 'src/dto/schema/signUp';
import { UsersService } from 'src/dbsrvs/srv/users/users.service';

@Injectable()
export class SignUpService {

    constructor(private userSrv: UsersService) {}

    loadSignup() {
        return "get signUp"
    }

    async createUser(userData: UserInfo) {
        const doesUserExist = await this.userSrv.findUser(userData.mail);
        if (doesUserExist !== null) {
            throw new UnauthorizedException
            ('Email Already Exist');
        }
        return await this.userSrv.createUser(userData);
    }

}

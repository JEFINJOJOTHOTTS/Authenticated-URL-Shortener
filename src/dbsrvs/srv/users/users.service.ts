import { Injectable } from '@nestjs/common';
import { UserModel } from '../../models/user.model';
import {bcrypt} from 'bcrypt'
import { UserInfo } from 'src/dto/schema/signup';

@Injectable()
export class UsersService {

    async createUser(userData: UserInfo) {
        try {
            
            const newUser = new UserModel({
                mail: userData.mail,
                password: await await bcrypt.hash(userData.password, 10),//bcrypt password
            });
            return newUser.save();
        } catch (err) {
            console.log(err);
        }
    }

    async findUser(mail: string) {
        try {
            return await UserModel.findOne({ mail });
        } catch (err) {
            console.log(err);
        }
    }
}

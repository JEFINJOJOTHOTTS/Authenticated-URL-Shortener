import { Injectable } from '@nestjs/common';
import { UserModel } from '../../models/user.model';
import * as bcrypt from 'bcrypt'
import { UserInfo } from 'src/dto/schema/signup';

@Injectable()
export class UsersService {

    async createUser(userData: UserInfo) {
        try {

            const newUser = new UserModel({
                mail: userData.mail,
                password: await bcrypt.hash(userData.password, 10),//bcrypt password
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

    async passwordCompare(userExist, userData):Promise<Boolean> {
        try {
            //check Verified
            return await bcrypt.compare( userData.password,userExist.password)

        }
        catch (err) {
            console.log(err);
       
        }
    }
}

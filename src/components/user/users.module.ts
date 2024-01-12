import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up/sign-up.service';
import { UsersService } from 'src/dbsrvs/srv/users/users.service';
import { SignUpController } from './sign-up/sign-up.controller';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '360d' },
    }),
  ],
  providers: [SignUpService, UsersService, LoginService],
  controllers: [SignUpController, LoginController],
  exports: [LoginService]
})
export class ComponentsModule { }

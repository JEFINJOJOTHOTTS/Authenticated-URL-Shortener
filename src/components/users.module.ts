import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up/sign-up.service';
import { UsersService } from 'src/dbsrvs/srv/users/users.service';
import { SignUpController } from './sign-up/sign-up.controller';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';

@Module({
  providers: [SignUpService,UsersService, LoginService],
  controllers:[SignUpController, LoginController]
})
export class ComponentsModule {}

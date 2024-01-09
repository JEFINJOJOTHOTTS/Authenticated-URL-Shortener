import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up/sign-up.service';
import { UsersService } from 'src/dbsrvs/srv/users/users.service';
import { SignUpController } from './sign-up/sign-up.controller';

@Module({
  providers: [SignUpService,UsersService],
  controllers:[SignUpController]
})
export class ComponentsModule {}

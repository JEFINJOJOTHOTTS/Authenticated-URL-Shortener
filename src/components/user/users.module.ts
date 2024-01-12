import { Module ,NestModule,MiddlewareConsumer,RequestMethod} from '@nestjs/common';
import { SignUpService } from './sign-up/sign-up.service';
import { UsersService } from 'src/dbsrvs/srv/users/users.service';
import { SignUpController } from './sign-up/sign-up.controller';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { JwtModule } from '@nestjs/jwt';
import { LogoutController } from './logout/logout.controller';
import { SignupMiddleware } from './middleware/signup';
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
  controllers: [SignUpController, LoginController, LogoutController],
  exports: [LoginService]
})
export class ComponentsModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SignupMiddleware)
      .forRoutes({ path: 'signup', method: RequestMethod.POST });
  }
}

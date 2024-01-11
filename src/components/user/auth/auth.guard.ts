import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.requireAuth(request);
    console.log("token", token)
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.SECRET,
      });
      console.log("payload", payload)
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;

    } catch (err) {
      console.log(err)
      throw new UnauthorizedException();
    }

    return true;
  }

  private requireAuth(request: Request): string | null {
    return request.cookies.jwt || null;
  }
}

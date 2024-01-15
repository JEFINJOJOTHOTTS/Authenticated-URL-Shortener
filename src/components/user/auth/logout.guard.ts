import {
    CanActivate,
    ExecutionContext,
    Injectable,
    // UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';
import { Request, Response } from 'express';

@Injectable()
export class LogoutGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const response = context.switchToHttp().getResponse<Response>();

        const token = this.requireAuth(request);
        // console.log("token", token)
        if (!token) {
            return true;
            // response.redirect('/login')
            // throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.SECRET,
            });
            console.log("payload", payload)
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request.body['user'] = payload;
            response.redirect('minify-url')

        } catch (err) {
            console.log(err)
            return true;
            // response.redirect('/login')
            // throw new UnauthorizedException();
        }

        
    }

    private requireAuth(request: Request): string | null {
        return request.cookies.jwt || null;
    }
}

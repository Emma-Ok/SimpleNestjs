import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request & { headers: { authorization: string } }, res: Response, next: () => void) {

    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    }

    if (authorization !== '1111') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
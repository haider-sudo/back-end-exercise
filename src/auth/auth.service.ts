import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);
    if (user && user.password !== password) {
      throw new UnauthorizedException(
        'Email or Password is incorrect',
      );
    }
    const payload = { userId: user.id, userName: user.email }; // Object payload
    const token = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
    }); 
    return token ; 
  }
}

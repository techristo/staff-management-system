import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    uname: string,
    pwd: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(uname,pwd);
    if (user.uname !== uname && user.pwd !== pwd) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.uname, username: user.pwd };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
import {
  Body,
  Controller,
  Post,
 
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Post('login')
  signIn(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto.uname, authDto.pwd);
  }

  
}
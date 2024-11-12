import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() payload: any) {
    console.log("PAYLOAD ->",payload)
    return this.authService.register(payload);
  }

  @Post("login")
  login(@Body() payload: any) {
    console.log("PAYLOAD ->",payload)
    return this.authService.login(payload);
  }
}

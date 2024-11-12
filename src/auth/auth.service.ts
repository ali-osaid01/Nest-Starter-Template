import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  register(payload: any) {
    return 'This action adds a new auth';
  }

  login(payload: any) {
    return `This action updates a auth`;
  }
}

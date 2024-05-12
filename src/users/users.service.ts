import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      uname: '111',
      pwd: '111',
    },
    {
      id: 2,
      uname: '222',
      pwd: '222',
    },
  ];

  async findOne(uname: string, pwd: string) {
    return this.users.find(user =>( user.uname === uname) && (user.pwd === pwd));
  }
}

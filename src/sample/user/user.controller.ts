import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Repositories } from 'src/sequelize/database-repository.enum';
import { IRepository } from 'src/sequelize/repository.interface';
import { User } from 'src/sample/user/user.model';

@Controller()
export class UserController {
  constructor(
    @Inject(Repositories.UsersRepository)
    private readonly userRepo: IRepository<User>
  ) {}

  @Get('/users')
  async getUsers() {
    return await this.userRepo.findAll();
  }

  @Post('/createUser')
  async createUser(@Body() userData: any) {
    return await this.userRepo.createOne({ ...userData });
  }
}

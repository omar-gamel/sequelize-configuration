import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Repositories } from 'src/sequelize/database-repository.enum';
import { IRepository } from 'src/sequelize/repository.interface';
import { Follower } from './follower.model';

@Controller()
export class FollowerController {
  constructor(
    @Inject(Repositories.FollowersRepository)
    private readonly followRepo: IRepository<Follower>
  ) {}

  @Get('/:id/followers')
  async getFollowers(@Param('id') userId: string) {
    return await this.followRepo.findAll({ where: { userId } });
  }

  @Post('/:id/followers')
  async addFollower(@Param('id') userId: string) {
    console.log(userId);
    return await this.followRepo.createOne({ userId });
  }
}

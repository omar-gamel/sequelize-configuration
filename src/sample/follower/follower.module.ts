import { Module } from '@nestjs/common';
import { FollowerController } from './follower.controller';

@Module({
  imports: [],
  controllers: [FollowerController],
  providers: []
})
export class FollowerModule {}

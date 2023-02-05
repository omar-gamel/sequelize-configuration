import { FollowerModule } from './sample/follower/follower.module';
import { UserModule } from './sample/user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './sequelize/database.module';

@Module({
  imports: [FollowerModule, UserModule, ConfigModule.forRoot(), DatabaseModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}

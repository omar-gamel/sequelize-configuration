import { Global, Module } from '@nestjs/common';
import { repositories } from './database.models';
import { databaseProvider } from './database.providers';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [databaseProvider, ...repositories],
  exports: [databaseProvider, ...repositories]
})
export class DatabaseModule {}

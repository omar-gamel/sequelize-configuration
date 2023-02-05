import { ConfigService } from '@nestjs/config';
import { SequelizeOptions, Sequelize } from 'sequelize-typescript';
import { config } from './database.config';
import { User } from 'src/sample/user/user.model';

export let sequelizeInstance: Sequelize;

export const databaseProvider = {
  provide: 'SEQUELIZE',
  useFactory: async (configService: ConfigService) => {
    sequelizeInstance = new Sequelize(<SequelizeOptions>config(configService));
    await sequelizeInstance.sync();
    return sequelizeInstance;
  },
  inject: [ConfigService]
};

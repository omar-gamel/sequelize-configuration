import { ConfigService } from '@nestjs/config';
import { SequelizeOptions } from 'sequelize-typescript';
import { models } from './database.models';
import { User } from 'src/sample/user/user.model';

export const config = (configService: ConfigService) => {
  return <SequelizeOptions>{
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    database: configService.get('DB_NAME'),
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    dialect: 'postgres',
    logging: sql => {
      console.log(`✔✔✔✔ ${new Date()}: ${sql}\n\n`);
      return false;
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    sync: {
      force: true
    },
    // This approach to load models is incredibly faster than files matching
    models
  };
};

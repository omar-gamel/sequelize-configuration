import { plural } from 'pluralize';
import { User } from 'src/sample/user/user.model';
import { Follower } from '../sample/follower/follower.model';
import { buildRepository } from './database-repository.builder';

export const models = [User, Follower];

export const repositories = models.map(model => ({
  provide: `${plural(model.name)}Repository`,
  useClass: buildRepository(model)
}));

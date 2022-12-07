import { plural } from 'pluralize';
import { User } from 'src/models/user.model';
import { buildRepository } from './database-repository.builder';

export const models = [
  User
];

export const repositories = models.map(model => ({
  provide: `${plural(model.name)}Repository`,
  useClass: buildRepository(model)
}));

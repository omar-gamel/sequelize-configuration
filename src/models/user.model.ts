import { paginate, manualPaginator } from '../paginator/paginator.service';

import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AllowNull,
  Default,
  Unique,
  CreatedAt,
  UpdatedAt,
  HasMany,
  ForeignKey,
  BelongsToMany,
  BelongsTo,
  HasOne,
  AutoIncrement
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'Users'
})
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  id: string;

//   @AutoIncrement
//   @Column
//   count: number;

  @CreatedAt
  @Column({ type: DataType.DATE })
  createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updatedAt: Date;

  static async paginate(filter = {}, sort = '-createdAt', page = 0, limit = 15, include: any = []) {
    return paginate<User>(this, filter, sort, page, limit, include);
  }

//   static paginateManually(data: User[], page = 0, limit = 15) {
//     return manualPaginator<User>(data, {}, '-createdAt', page, limit);
//   }
}

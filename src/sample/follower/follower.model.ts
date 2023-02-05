import { paginate, manualPaginator } from '../../paginator/paginator.service';
import { User } from 'src/sample/user/user.model';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'Followers'
})
export class Follower extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @CreatedAt
  @Column({ type: DataType.DATE })
  createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updatedAt: Date;

  static async paginate(filter = {}, sort = '-createdAt', page = 0, limit = 15, include: any = []) {
    return paginate<User>(this, filter, sort, page, limit, include);
  }

  static paginateManually(data: User[], page = 0, limit = 15) {
    return manualPaginator<User>(data, {}, '-createdAt', page, limit);
  }
}

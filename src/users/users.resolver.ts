import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])  // GraphQL запрос для получения всех пользователей
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(() => User)  // GraphQL мутация для создания нового пользователя
  async createUser(
      @Args('name') name: string,
      @Args('email') email: string,
  ): Promise<User> {
    return this.usersService.create({ name, email });
  }
}

import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
    @Query(() => String)
    getUsers(): string {
        return 'Hello World!';
    }
}

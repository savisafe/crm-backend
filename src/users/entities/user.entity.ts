import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()  // Для GraphQL
@Entity()      // Для TypeORM
export class User {
  @PrimaryGeneratedColumn()
  @Field()  // Это поле будет доступно в GraphQL
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;
}

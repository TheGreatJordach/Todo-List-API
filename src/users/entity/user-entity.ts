import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "../../todos/entity/todo-entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}

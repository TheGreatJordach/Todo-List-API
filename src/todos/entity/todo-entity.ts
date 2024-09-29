import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entity/user-entity";

@Entity("todos")
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}

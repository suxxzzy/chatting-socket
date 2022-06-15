import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    unique: true,
  })
  nickname: string;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
  })
  email: string;

  @Column({
    type: "varchar",
    length: 70,
    unique: true,
    nullable: true,
  })
  password: string;

  @Column({
    type: "varchar",
    length: 500,
    unique: true,
    nullable: true,
  })
  avatar: string;

  @Column({
    type: "int",
    default: 0,
  })
  platformType: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}

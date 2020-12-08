import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';

@Entity({ name: 'students' })
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  ra: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true, default: false })
  inside: boolean;

  @ManyToMany(() => Rotation, rotations => rotations.students)
  rotations: Rotation[];
}

export default Student;

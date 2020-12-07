import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';

@Entity({ name: 'professors' })
class Professor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @OneToMany(() => Rotation, rotation => rotation.professor)
  rotations: Rotation[];
}

export default Professor;

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}

export default Professor;

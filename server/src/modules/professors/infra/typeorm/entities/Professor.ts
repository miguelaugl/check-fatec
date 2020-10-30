import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'professors' })
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;
}

export default Student;

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'examples' })
class Example {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
}

export default Example;

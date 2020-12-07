import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import Professor from '@modules/professors/infra/typeorm/entities/Professor';
import Student from '@modules/students/infra/typeorm/entities/Student';

@Entity({ name: 'rotations' })
class Rotation {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  subject: string;

  @Column({ name: 'lab_number' })
  labNumber: number;

  @Column()
  initTime: string;

  @Column()
  endTime: string;

  @ManyToOne(() => Professor, professor => professor.rotations)
  @JoinColumn({ name: 'professor_id' })
  professor: Professor;

  @ManyToMany(() => Student, student => student.rotations)
  @JoinTable()
  students: Student[];
}

export default Rotation;

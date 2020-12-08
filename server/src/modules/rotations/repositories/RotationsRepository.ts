import { getRepository, Repository } from 'typeorm';

import Rotation from '@modules/rotations/infra/typeorm/entities/Rotation';
import CreateRotationDTO from '@modules/rotations/dtos/CreateRotationDTO';
import StudentCheckInDTO from '@modules/rotations/dtos/StudentCheckInDTO';
import Student from '@modules/students/infra/typeorm/entities/Student';
import Professor from '@modules/professors/infra/typeorm/entities/Professor';
import IRotationsRepository from './IRotationsRepository';

class RotationsRepository implements IRotationsRepository {
  private ormRepository: Repository<Rotation>;

  private studentsRepository: Repository<Student>;

  private professorsRepository: Repository<Professor>;

  constructor() {
    this.ormRepository = getRepository(Rotation);
    this.studentsRepository = getRepository(Student);
    this.professorsRepository = getRepository(Professor);
  }

  public async studentCheckIn({
    rotationId,
    studentId,
  }: StudentCheckInDTO): Promise<Rotation | undefined> {
    const student = await this.studentsRepository.findOne(studentId);

    if (student) {
      student.inside = true;
      await this.studentsRepository.save(student);
    }

    const rotation = await this.ormRepository.findOne({
      relations: ['students'],
      where: {
        id: rotationId,
      },
    });

    return rotation;
  }

  public async create({
    subject,
    labNumber,
    initTime,
    endTime,
    professor,
    course,
  }: CreateRotationDTO): Promise<Rotation> {
    const allStudents = await this.studentsRepository.find();

    const sortedStudents = allStudents.filter(student => {
      const today = new Date();
      const todayDay = today.getDate();

      if (todayDay % 2 === 0) {
        return Number(student.ra) % 2 === 0;
      }

      return Number(student.ra) % 2 !== 0;
    });

    const professorSelected = await this.professorsRepository.findOne(
      professor,
    );

    const rotation = this.ormRepository.create({
      subject,
      labNumber,
      initTime,
      endTime,
      professor: professorSelected,
      students: sortedStudents,
      course,
    });

    await this.ormRepository.save(rotation);

    return rotation;
  }
}

export default RotationsRepository;

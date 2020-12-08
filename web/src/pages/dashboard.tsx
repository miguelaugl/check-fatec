import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MdHome } from 'react-icons/md';
import { FiLogOut, FiChevronRight } from 'react-icons/fi';

import Swal from 'sweetalert2';
import profileImg from '../assets/profile-pic.jpg';
import dashboardImg from '../assets/dashboard-image.png';
import rotationImg from '../assets/rotation.png';
import Miguel from '../assets/miguel.jpg';
import Bruno from '../assets/bruno.jpg';
import Isabella from '../assets/isabella.jpg';
import Nadaleti from '../assets/nadaleti.jpg';
import noPhoto from '../assets/no-photo.png';

import {
  Overlay,
  ModalContent,
  Wrapper,
  SideBar,
  SideNav,
  Container,
  LeftSide,
  Class,
  RightSide,
  Student,
} from '../styles/pages/Dashboard';
import { useAuth } from '../context/auth';
import api from '../services/api';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>();
  const [labNumber, setLabNumber] = useState<string>();
  const [initTime, setInitTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const [course, setCourse] = useState<string>();

  const [rotations, setRotations] = useState([]);
  const [currentRotation, setCurrentRotation] = useState(null);
  const [loading, setLoading] = useState(true);

  const overlayRef = useRef(null);

  function handleLogoutClick() {
    signOut();
  }

  async function handleCreateButtonClick() {
    const rotation = {
      subject,
      labNumber,
      initTime,
      endTime,
      course,
    };

    const response = await api.post('/rotations', rotation);

    setRotations((rotationsArr) => [...rotationsArr, response.data]);

    setModalVisible(false);

    Swal.fire({
      title: '<strong>Boa!</strong>',
      icon: 'success',
      html: `Rodízio criado com sucesso!<br/>
          <b>Matéria: <b/>${subject}<br/>
          <b>Curso: <b/>${course}<br/>
          <b>Número da sala: <b/>${labNumber}<br/>
          <b>Horário: <b/>${initTime} ~ ${endTime}<br/>
        `,
      showCloseButton: true,
    });
  }

  async function handleRotationClick(rotationId: string) {
    const response = await api.get(`/rotations/${rotationId}`);

    setCurrentRotation(response.data);
  }

  useEffect(() => {
    (async () => {
      const response = await api.get('/rotations/professor');

      setRotations(response.data);
      setLoading(false);
    })();

    window.addEventListener('click', (event) => {
      if (event.target === overlayRef.current) {
        setModalVisible(false);
      }
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Overlay
        ref={overlayRef}
        style={{
          display: modalVisible ? 'flex' : 'none',
        }}
      >
        <ModalContent>
          <h2>Criar rodízio de alunos</h2>

          <img src={rotationImg} alt="Rotação" />

          <div className="input-group">
            <label htmlFor="subject">
              Matéria
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>

            <label htmlFor="course">
              Curso
              <input
                type="text"
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </label>
          </div>

          <div className="input-group">
            <label htmlFor="labNumber">
              Número da sala
              <input
                type="text"
                id="labNumber"
                value={labNumber}
                onChange={(e) => setLabNumber(e.target.value)}
              />
            </label>
            <label htmlFor="initTime">
              Horário de início
              <input
                type="text"
                id="initTime"
                value={initTime}
                onChange={(e) => setInitTime(e.target.value)}
              />
            </label>

            <label htmlFor="endTime">
              Horário do fim
              <input
                type="text"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </label>
          </div>

          <button type="button" onClick={handleCreateButtonClick}>
            Criar rodízio
          </button>
        </ModalContent>
      </Overlay>

      <Wrapper>
        <SideBar>
          <div className="profile">
            <img src={profileImg} alt="Imagem de perfil do usuário" />
            <p>{user?.name}</p>
          </div>

          <SideNav>
            <Link href="">
              <a>
                <MdHome size={24} color="#fff" />
                Dashboard
              </a>
            </Link>
            <a onClick={handleLogoutClick}>
              <FiLogOut size={24} color="#fff" />
              Logout
            </a>
          </SideNav>
        </SideBar>
        <Container>
          <LeftSide>
            <h2>Rodízio de alunos</h2>
            <p>Crie com apenas um clique o rodízio de alunos</p>

            <button
              type="button"
              className="create"
              onClick={() => setModalVisible(true)}
            >
              Criar rodízio
            </button>

            <h2>Suas aulas durante a semana</h2>
            <p>Visualize aqui as suas aulas agendadas durante a semana</p>

            <img src={dashboardImg} alt="Homem agendando no calendário" />

            <ul>
              {rotations.map((rotation) => (
                <Class
                  key={rotation.id}
                  onClick={() => handleRotationClick(rotation.id)}
                >
                  <div>
                    <p>
                      Sala {rotation.labNumber} - {rotation.subject}
                    </p>
                    <strong>
                      {rotation.initTime} ~ {rotation.endTime}
                    </strong>
                  </div>

                  <FiChevronRight size={32} />
                </Class>
              ))}
            </ul>
          </LeftSide>

          {currentRotation && (
            <RightSide>
              <h2>Sua aula na sala {currentRotation.labNumber}</h2>
              <h3>
                {currentRotation.initTime} ~ {currentRotation.endTime} -{' '}
                {currentRotation.subject}
              </h3>

              <h4>Alunos selecionados:</h4>

              <ul>
                {currentRotation.students.map((student) => {
                  if (!student.inside) {
                    return (
                      <Student>
                        <img
                          src={noPhoto}
                          alt={student.name}
                          title={student.name}
                        />
                        <p>{student.name}</p>
                      </Student>
                    );
                  }
                })}
              </ul>

              <h4>Alunos presentes:</h4>

              <ul>
                {currentRotation.students.map((student) => {
                  if (student.inside) {
                    return (
                      <Student>
                        <img
                          src={noPhoto}
                          alt={student.name}
                          title={student.name}
                        />
                        <p>{student.name}</p>
                      </Student>
                    );
                  }
                })}
              </ul>
            </RightSide>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default Dashboard;

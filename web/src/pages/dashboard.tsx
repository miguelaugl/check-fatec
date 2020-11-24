import React from 'react';
import Link from 'next/link';
import { MdHome, MdToday, MdGraphicEq } from 'react-icons/md';
import { FiLogOut, FiChevronRight } from 'react-icons/fi';

import profileImg from '../assets/profile-pic.jpg';
import dashboardImg from '../assets/dashboard-image.png';
import Miguel from '../assets/miguel.jpg';
import Bruno from '../assets/bruno.jpg';
import Isabella from '../assets/isabella.jpg';
import Nadaleti from '../assets/nadaleti.jpg';

import {
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

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleLogoutClick() {
    signOut();
  }

  return (
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
          <Link href="">
            <a>
              <MdToday size={24} color="#fff" />
              Calendário
            </a>
          </Link>
          <Link href="">
            <a>
              <MdGraphicEq size={24} color="#fff" />
              Gráficos
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
          <h2>Suas aulas durante a semana</h2>
          <p>Visualize aqui as suas aulas agendadas durante a semana</p>

          <img src={dashboardImg} alt="Homem agendando no calendário" />

          <ul>
            <Class>
              <div>
                <p>Sala 5 - Enganharia de Software II</p>
                <strong>Hoje às 9:20 - ADS</strong>
              </div>

              <FiChevronRight size={32} />
            </Class>

            <Class>
              <div>
                <p>Sala 5 - Enganharia de Software II</p>
                <strong>Hoje às 9:20 - ADS</strong>
              </div>

              <FiChevronRight size={32} />
            </Class>

            <Class>
              <div>
                <p>Sala 5 - Enganharia de Software II</p>
                <strong>Hoje às 9:20 - ADS</strong>
              </div>

              <FiChevronRight size={32} />
            </Class>

            <Class>
              <div>
                <p>Sala 5 - Enganharia de Software II</p>
                <strong>Hoje às 9:20 - ADS</strong>
              </div>

              <FiChevronRight size={32} />
            </Class>
          </ul>
        </LeftSide>

        <RightSide>
          <h2>Suas aulas durante a semana</h2>
          <h3>Hoje às 9:20 - ADS</h3>

          <h4>Alunos confirmados:</h4>

          <ul>
            <Student>
              <img src={Miguel} alt="Miguel Augusto" />
              <p>Miguel Augusto</p>
            </Student>
            <Student>
              <img src={Bruno} alt="Bruno Leandro" />
              <p>Bruno Leandro</p>
            </Student>
            <Student>
              <img src={Isabella} alt="Isabella Mensatto" />
              <p>Isabella Mensatto</p>
            </Student>
            <Student>
              <img src={Nadaleti} alt="Gabriel Nadaleti" />
              <p>Gabriel Nadaleti</p>
            </Student>
            <Student>
              <img src={Miguel} alt="Miguel Augusto" />
              <p>Miguel Augusto</p>
            </Student>
            <Student>
              <img src={Bruno} alt="Bruno Leandro" />
              <p>Bruno Leandro</p>
            </Student>
            <Student>
              <img src={Isabella} alt="Isabella Mensatto" />
              <p>Isabella Mensatto</p>
            </Student>
            <Student>
              <img src={Nadaleti} alt="Gabriel Nadaleti" />
              <p>Gabriel Nadaleti</p>
            </Student>
            <Student>
              <img src={Miguel} alt="Miguel Augusto" />
              <p>Miguel Augusto</p>
            </Student>
            <Student>
              <img src={Bruno} alt="Bruno Leandro" />
              <p>Bruno Leandro</p>
            </Student>
            <Student>
              <img src={Isabella} alt="Isabella Mensatto" />
              <p>Isabella Mensatto</p>
            </Student>
            <Student>
              <img src={Nadaleti} alt="Gabriel Nadaleti" />
              <p>Gabriel Nadaleti</p>
            </Student>
          </ul>

          <h4>Alunos presentes:</h4>

          <ul>
            <Student>
              <img src={Miguel} alt="Miguel Augusto" />
              <p>Miguel Augusto</p>
            </Student>
            <Student>
              <img src={Bruno} alt="Bruno Leandro" />
              <p>Bruno Leandro</p>
            </Student>
            <Student>
              <img src={Isabella} alt="Isabella Mensatto" />
              <p>Isabella Mensatto</p>
            </Student>
            <Student>
              <img src={Nadaleti} alt="Gabriel Nadaleti" />
              <p>Gabriel Nadaleti</p>
            </Student>
            <Student>
              <img src={Miguel} alt="Miguel Augusto" />
              <p>Miguel Augusto</p>
            </Student>
            <Student>
              <img src={Bruno} alt="Bruno Leandro" />
              <p>Bruno Leandro</p>
            </Student>
            <Student>
              <img src={Isabella} alt="Isabella Mensatto" />
              <p>Isabella Mensatto</p>
            </Student>
            <Student>
              <img src={Nadaleti} alt="Gabriel Nadaleti" />
              <p>Gabriel Nadaleti</p>
            </Student>
          </ul>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;

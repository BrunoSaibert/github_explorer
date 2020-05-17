import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <S.Title>Armazene usuários e repositórios favoritos do Github.</S.Title>

      <S.ButtonGroup>
        <Link to="/user">Usuários</Link>
        <Link to="/repository">Repositórios</Link>
      </S.ButtonGroup>
    </>
  );
};

export default Dashboard;

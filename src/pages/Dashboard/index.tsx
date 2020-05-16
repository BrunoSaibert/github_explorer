import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <S.Title>Explores repositórios no Github.</S.Title>

      <S.Form>
        <input placeholder="Digite o nome do seu repositório" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40339324?s=460&u=4f5a7b83aa4e018b4eccbeaa1f6a6b8b04e0e4b7&v=4"
            alt="Bruno Saibert"
          />
          <div>
            <strong>BrunoSaibert/netfake</strong>
            <p>A Netflix clone</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40339324?s=460&u=4f5a7b83aa4e018b4eccbeaa1f6a6b8b04e0e4b7&v=4"
            alt="Bruno Saibert"
          />
          <div>
            <strong>BrunoSaibert/netfake</strong>
            <p>A Netflix clone</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40339324?s=460&u=4f5a7b83aa4e018b4eccbeaa1f6a6b8b04e0e4b7&v=4"
            alt="Bruno Saibert"
          />
          <div>
            <strong>BrunoSaibert/netfake</strong>
            <p>A Netflix clone</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </S.Repositories>
    </>
  );
};

export default Dashboard;

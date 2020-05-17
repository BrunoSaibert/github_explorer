import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../../services/api';

import logoImg from '../../../assets/logo.svg';

import * as S from './styles';

interface UserParams {
  login: string;
}

interface User {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description?: string;
}

const UserDetails: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();
  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      api.get(`users/${params.login}`).then(response => {
        setUser(response.data);
      });

      api.get(`users/${params.login}/repos`).then(response => {
        setRepositories(response.data);
      });
    }
    loadData();
  }, [params.login]);

  return (
    <>
      <S.Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/user">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </S.Header>

      {user && (
        <S.UserInfo>
          <header>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{user.public_repos}</strong>
              <span>Repositories</span>
            </li>
            <li>
              <strong>{user.followers}</strong>
              <span>Followers</span>
            </li>
            <li>
              <strong>{user.following}</strong>
              <span>Following</span>
            </li>
          </ul>
        </S.UserInfo>
      )}

      {repositories && (
        <S.Repositories>
          {repositories.map(repository => (
            <a key={repository.id} href={repository.html_url}>
              <div>
                <strong>{repository.name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
        </S.Repositories>
      )}
    </>
  );
};

export default UserDetails;

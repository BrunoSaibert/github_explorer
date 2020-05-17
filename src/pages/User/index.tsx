import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

interface User {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
}

const User: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<User[]>(() => {
    const storageUsers = localStorage.getItem('@GithubExplorer:users');

    if (storageUsers) {
      return JSON.parse(storageUsers);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:users', JSON.stringify(users));
  }, [users]);

  async function handlerAddUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setInputError('Digite o usuário');
      return;
    }

    try {
      const response = await api.get<User>(`users/${newUser}`);

      const user = response.data;

      setUsers([...users, user]);
      setNewUser('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca desse usuário');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <S.Title>Explores usuários do Github.</S.Title>

      <S.Form onSubmit={handlerAddUser} hasError={!!inputError}>
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>

      {inputError && <S.Error>{inputError}</S.Error>}

      <S.Users>
        {users.map(user => (
          <Link to={`user/${user.login}`} key={user.login}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </S.Users>
    </>
  );
};

export default User;

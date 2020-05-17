import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 41px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const ButtonGroup = styled.div`
  display: flex;

  margin-top: 80px;
  max-width: 700px;

  a {
    background: #3a3a3a;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 32px;
    text-decoration: none;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#3a3a3a')};
    }

    & + a {
      margin-left: 16px;
    }
  }
`;

import { shade } from 'polished';
import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 3rem;

  button + button {
    margin-top: 1rem;
  }
`;

export const Color = styled.button<Props>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  background: ${props => props.color};

  cursor: pointer;
  outline: 0;

  &:hover,
  &:focus {
    background: ${props => shade(0.2, props.color)};
  }
`;

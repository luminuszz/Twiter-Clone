import { shade } from 'polished';
import styled from 'styled-components';

interface Props {
  color: string;
}

export interface ContaienrProps {
  flexDirection: 'row' | 'column';
}

export const Container = styled.div<ContaienrProps>`
  display: none;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  padding: 3rem;

  button + button {
    margin-top: ${props => (props.flexDirection === 'column' ? '1rem' : 0)};
  }

  > button {
    margin-left: ${props => (props.flexDirection === 'row' ? '1rem' : 0)};
  }

  @media (max-width: 500px) {
    display: flex;
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

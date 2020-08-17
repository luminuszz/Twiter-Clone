import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.secondary};
  border-radius: 1.4rem;
`;

export const Item = styled.div`
  padding: 1rem 1.6rem;

  & + div {
    border-top: 0.1rem solid ${props => props.theme.colors.outline};
  }

  &:first-child {
    padding-top: 1.3rem;
  }

  &:last-child {
    padding-bottom: 1.7rem;
  }
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

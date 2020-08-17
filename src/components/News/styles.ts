import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1.4rem;

  > span {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 0.4rem;
  }
`;

import styled from 'styled-components';
import { Search } from 'styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 199%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 1rem 2.4rem;
  width: min(399px, 100%);

  position: fixed;

  top: 0;
  z-index: 2;
  background: ${props => props.theme.colors.primary};

  max-height: 5.7rem;
`;

export const SearchInput = styled.div`
  width: 100%;
  height: 3.9rem;
  font-size: 1.4rem;

  padding: 0 1rem 0 5.2rem;
  border-radius: 19.5rem;
  background: ${props => props.theme.colors.search};

  &::placeholder {
    color: ${props => props.theme.colors.gray};
  }

  ~ svg {
    position: relative;
    top: -3.3rem;
    left: 1.5rem;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;
  &:focus {
    border: 1px solid ${props => props.theme.colors.twitter};

    ~ svg {
      fill: ${props => props.theme.colors.twitter};
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 2.7rem;
  height: 2.7rem;

  fill: ${props => props.theme.colors.gray};
`;

export const BodySideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.7rem 2.4rem 20rem;
  margin-top: 0.3rem;

  > div + div {
    margin-top: 15px;
  }
`;

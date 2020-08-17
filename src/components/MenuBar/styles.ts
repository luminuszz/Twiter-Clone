import styled, { css } from 'styled-components';
import {
  Notifications,
  Home,
  Email,
  Favorite,
  Person,
  Rockseat,
  ExitToApp,
} from 'styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 0.9rem 1.9rem 2rem;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rockseat)`
  width: 4.1rem;
  height: 4.1rem;

  > path {
    fill: ${props => props.theme.colors.twitter};
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 1.9rem;

      font-weight: bold;
      font-size: 1.9rem;
    }

    padding-right: 1.5rem;
  }

  padding: 0.8rem 0;
  outline: 0;

  & + button {
    margin-top: 1.6rem;
  }

  & + button:last-child {
    margin-top: 3.3rem;
    width: 4rem;
    height: 4rem;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: ${props => props.theme.colors.twitterDarkHover};
  }

  &:hover,
  &.active {
    span,
    svg {
      color: ${props => props.theme.colors.twitter};
      fill: ${props => props.theme.colors.twitter};
    }
  }
`;

const iconCss = css`
  flex-shrink: 0;

  width: 3rem;
  height: 3rem;

  color: ${props => props.theme.colors.white};
`;

export const HomeIcon = styled(Home)`
  ${iconCss}
`;
export const BellIcon = styled(Notifications)`
  ${iconCss}
`;
export const EmailIcon = styled(Email)`
  ${iconCss}
`;
export const FacoriteIcon = styled(Favorite)`
  ${iconCss}
`;
export const ProfileIcon = styled(Person)`
  ${iconCss}
`;

export const BotSide = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
`;

export const BotSideAvatar = styled.div`
  width: 3.9rem;
  height: 3.9rem;
  flex-shrink: 0;
  border-radius: 50%;

  background: ${props => props.theme.colors.gray};
`;

export const ProfileDataBotSide = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 1rem;

    font-size: 1.4rem;

    > span {
      color: ${props => props.theme.colors.gray};
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;

    margin-left: 3rem;

    color: ${props => props.theme.colors.gray};

    cursor: pointer;

    &:hover {
      > path {
        color: ${props => props.theme.colors.like};
      }
    }
  }
`;

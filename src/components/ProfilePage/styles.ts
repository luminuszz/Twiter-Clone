import styled, { css } from 'styled-components';
import { Cake, LocationOn } from 'styles/icons';

import Button from '../Button';

export const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: ${props => props.theme.colors.twitter};

  position: relative;
`;
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.gray};
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;
export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font: bold 19px;
  }
  > h2 {
    font: normal 15px;
    color: ${props => props.theme.colors.gray};
  }

  > p {
    font-size: 15px;
    margin-top: 15px;

    > a {
      text-decoration: none;
      color: ${props => props.theme.colors.twitter};
    }
  }

  ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: ${props => props.theme.colors.gray};

      > svg {
        fill: ${props => props.theme.colors.gray};
        margin-right: 5px;
      }
      & + li {
        margin-top: 5px;
      }
    }
  }
`;
const iconCSS = css`
  width: 20px;
  height: 20px;

  color: ${props => props.theme.colors.gray};
`;
export const LocationIcon = styled(Cake)`
  ${iconCSS}
`;
export const CakeIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const Foollowage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: ${props => props.theme.colors.gray};

    & + span {
      margin-left: 20px;
    }

    strong {
      margin-left: 2px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;

  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px;
    font-size: 15px;
  }
`;

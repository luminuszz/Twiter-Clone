import styled, { css } from 'styled-components';
import { Rockseat, Chat, Favorite } from 'styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.4rem 1.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.outline};

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const RockseatIcon = styled(Rockseat)`
  width: 1.6rem;
  height: 1.6rem;

  margin-left: 3.5rem;
  margin-right: 0.9rem;

  > path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

export const TweetBody = styled.div`
  display: flex;
  margin-top: 0.3rem;

  position: relative;
`;

export const Avatar = styled.div`
  width: 4.9rem;
  height: 4.9rem;
  border-radius: 50%;
  flex-shrink: 0;

  background: ${({ theme }) => theme.colors.gray};

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 5.9rem;
  width: 100%;
  margin-top: 0.2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  white-space: nowrap;

  > strong {
    margin-right: 0.5rem;
  }

  > span,
  time {
    color: ${({ theme }) => theme.colors.gray};
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 0.2rem;
  height: 0.2rem;

  margin: 0 1rem;
`;

export const Description = styled.div`
  font-size: 1.4rem;
  margin-top: 0.4rem;
`;

export const ImageContent = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: ${props => props.theme.colors.gray};
  border-radius: 1.4rem;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  > svg {
    margin-right: 0.5rem;
    transition: 0.2s;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: ${props => props.theme.colors.gray};
    }
  }
  &:nth-child(2) {
    color: ${props => props.theme.colors.retweet};
    > svg path {
      fill: ${props => props.theme.colors.retweet};
    }
  }

  &:nth-child(3) {
    color: ${props => props.theme.colors.like};
    > svg {
      fill: ${props => props.theme.colors.like};
    }
  }
`;

const IconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${IconCSS}
`;

export const RetweetIcon = styled(Rockseat)`
  ${IconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${IconCSS}
`;

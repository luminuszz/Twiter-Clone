import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 4.9rem;
  height: 4.9rem;

  background: ${props => props.theme.colors.gray};
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
`;

export const FollowButton = styled(Button)`
  padding: 0.6rem 1.7rem;
`;

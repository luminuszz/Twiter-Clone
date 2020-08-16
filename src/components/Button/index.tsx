import styled, { css } from 'styled-components';

interface Props {
  outilened?: boolean;
}

const buttonDefault = css`
  background: ${({ theme }) => theme.colors.twitter};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.twitterLightHover};
  }
`;

const buttonOutline = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.twitter};
  border: 1px solid ${({ theme }) => theme.colors.twitter};

  &:hover {
    background: ${({ theme }) => theme.colors.twitterDarkHover};
  }
`;

const Button = styled.button<Props>`
  ${({ outilened }) => (outilened ? buttonOutline : buttonDefault)}

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
`;

export default Button;

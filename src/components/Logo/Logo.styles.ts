import styled, { css, DefaultTheme } from "styled-components";

import { LogoProps } from ".";

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: (theme: DefaultTheme) => css`
    ${theme.media.lessThan("medium")`
    width: 5.8rem;
    height: 4.5rem;


    svg {
      height: 4.5rem;
      pointer-events: none;
    }

    .text {
      display: none;
    }
  `}
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.palette[color!].main};

    ${!!size && wrapperModifiers[size]}

    ${!!hideOnMobile && wrapperModifiers.hideOnMobile(theme)}
  `}
`;

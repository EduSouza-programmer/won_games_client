import styled, { css, DefaultTheme } from "styled-components";

import media from "styled-media-query";

import { HeadingProps } from ".";

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.palette.secondary.main};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: "";
      width: 5rem;
      border-top: 0.7rem solid ${theme.palette.primary.main};
    }
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.palette[color!].main};
    font-size: ${theme.typography.fontSizes.xlarge};

    ${media.greaterThan("medium")`
    font-size: ${theme.typography.fontSizes.xxlarge};

    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)};
    ${lineBottom && wrapperModifiers.lineBottom(theme)};
  `}
`;

import styled, { css, DefaultTheme } from "styled-components";

import media from "styled-media-query";

import { HeadingProps, LineColor } from ".";

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColor) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.5rem solid ${theme.palette[lineColor!].main};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;

    &::after {
      position: absolute;
      left: 0;
      bottom: -0.7rem;
      content: "";
      width: 5rem;
      border-top: 0.5rem solid ${theme.palette[lineColor!].main};
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.typography.fontSizes.medium};

    ::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.typography.fontSizes.xlarge};

    ${media.greaterThan("medium")`
      font-size: ${theme.typography.fontSizes.xxlarge};

`}
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.palette[color!].main};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;

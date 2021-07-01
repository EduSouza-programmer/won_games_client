import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";

import { RibbonColors, RibbonProps } from ".";

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.palette[color].main};

    &::before {
      border-top-color: ${darken(0.2, theme.palette[color].main)};
      border-left-color: ${darken(0.2, theme.palette[color].main)};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.typography.fontSizes.small};
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.typography.fontSizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,
};

export const Wrapper = styled.div<Omit<RibbonProps, "children">>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.white.main};
    z-index: ${theme.zIndex.base};
    box-shadow: -0.4rem 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.7);

    &::before {
      content: "";
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`;

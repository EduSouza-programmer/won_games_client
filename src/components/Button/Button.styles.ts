import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";

import { ButtonProps } from ".";

type wrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  "size" | "fullWidth" | "minimal"
>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.typography.fontSizes.small};
    padding: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.typography.fontSizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.typography.fontSizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5em;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.palette.primary.main};

    &:hover {
      color: ${darken(0.2, theme.palette.primary.main)};
      text-decoration: underline;
    }
  `,
};

export const Wrapper = styled.button<wrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.palette.white.main};
    border: 0;
    border-radius: ${theme.border.radius};
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${minimal
        ? "none"
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${!!size && wrapperModifiers[size](theme)}

    ${fullWidth && wrapperModifiers.fullWidth}

    ${!!hasIcon && wrapperModifiers.withIcon(theme)}

    ${minimal && wrapperModifiers.minimal(theme)}
  `}
`;

import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";
import { lighten } from "polished";

import { TextFieldProps } from ".";

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;

    width: 2.2rem;
    color: ${theme.palette.gray.main};

    & > svg {
      width: 100%;

      transform: scale(1);
      transition: all 0.2s ease-out;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.palette.black.main};
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizes.small};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 4.8rem;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 3rem ${theme.palette.lightGray.main} inset !important;
    }

    ${media.greaterThan("medium")`
    font-size: ${theme.typography.fontSizes.medium};
    `}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.small};
    color: ${theme.palette.black.main};
    cursor: pointer;
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    background: ${theme.palette.lightGray.main};
    padding: 0 ${theme.spacings.xsmall};
    border-radius: 0.2rem;
    border: 0.2rem solid ${theme.palette.lightGray.main};

    transition: all 0.2s ease-in-out;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.palette.primary.main};
      & svg {
        transform: scale(1.2);
        transition: all 0.2s ease-in;
      }
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.red.main};
    font-size: ${theme.typography.fontSizes.xsmall};
    font-style: italic;
  `}
`;

const wrapperModifiers = {
  left: (theme: DefaultTheme) => css`
    ${Input} {
      padding-left: ${theme.spacings.xxsmall};
    }
    ${Icon} {
      order: 0;
    }
  `,

  right: (theme: DefaultTheme) => css`
    ${Input} {
      padding-right: ${theme.spacings.xxsmall};
    }
    ${Icon} {
      order: 1;
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${InputWrapper},
    ${Icon} {
      cursor: not-allowed;
      color: ${lighten(0.2, theme.palette.gray.main)};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${Label},
    ${Icon} {
      color: ${theme.palette.red.main};
    }

    ${InputWrapper} {
      border-color: ${theme.palette.red.main};
    }
  `,

  colorIconIsFilled: (theme: DefaultTheme, error: string) => {
    return (
      !error &&
      css`
        ${Icon} {
          color: ${theme.palette.primary.main};
          & > svg {
            transform: scale(1);
          }
        }
      `
    );
  },
};

type WrapperProps = { hasIcon: boolean; isFilledIconColor: boolean } & Pick<
  TextFieldProps,
  "iconPosition" | "disabled" | "error"
>;

export const Wrapper = styled.div<WrapperProps>`
  ${({
    theme,
    hasIcon,
    iconPosition,
    disabled,
    error,
    isFilledIconColor,
  }) => css`
    ${hasIcon && wrapperModifiers[iconPosition!](theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
    ${!!error && wrapperModifiers.error(theme)}
    ${isFilledIconColor && wrapperModifiers.colorIconIsFilled(theme, error!)}
  `}
`;

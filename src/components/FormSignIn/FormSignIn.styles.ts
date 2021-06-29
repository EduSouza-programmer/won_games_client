import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

import * as TextFieldStyles from "@/components/TextField/TextField.styles";
import * as ButtonStyles from "@/components/Button/Button.styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      & + div {
        margin: ${theme.spacings.xxsmall} 0;
      }
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const ForgotPassword = styled.div`
  ${({ theme }) => css`
    text-align: right;
    a {
      font-size: ${theme.typography.fontSizes.small};
      color: ${theme.palette.black.main};
      text-decoration: none;

      &:hover {
        color: ${lighten(0.3, theme.palette.black.main)};
      }
    }
  `}
`;

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.small};
    color: ${theme.palette.black.main};
    text-align: center;

    a {
      color: ${theme.palette.secondary.main};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.palette.secondary.main};
      transition: color, border, 0.2s ease-out;

      &:hover {
        color: ${darken(0.1, theme.palette.secondary.main)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.palette.secondary.main)};
      }
    }
  `}
`;

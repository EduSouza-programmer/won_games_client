import styled, { css } from "styled-components";

import { CheckboxProps } from ".";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.palette.darkGray.main};
    border-radius: 0.2rem;
    outline: none;
    cursor: pointer;
    position: relative;

    transition: background 0.3s ease-in-out;
    transition: border 0.2s ease-in-out;

    &::before {
      content: "";
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.palette.white.main};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;

      transition: all 0.1s ease-in-out;
    }

    &:checked {
      border-color: ${theme.palette.primary.main};
      background: ${theme.palette.primary.main};
      &:before {
        opacity: 1;
      }
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.palette.primary.main};
    }
  `}
`;

export const Label = styled.label<Pick<CheckboxProps, "labelColor">>`
  ${({ theme, labelColor }) => css`
    color: ${theme.palette[labelColor!].main};
    cursor: pointer;
    margin-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`;

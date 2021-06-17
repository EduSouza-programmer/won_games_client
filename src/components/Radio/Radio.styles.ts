import styled, { css } from "styled-components";

import { RadioProps } from ".";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Radio = styled.input`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.palette.primary.main};
    border-radius: 50%;
    cursor: pointer;
    outline: none;

    &::before {
      content: "";
      width: 0.8rem;
      height: 0.8rem;
      background: ${theme.palette.primary.main};
      border-radius: 50%;
      position: absolute;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease-in-out;
    }

    &:checked {
      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.palette.primary.main};
    }
  `}
`;

export const Label = styled.label<Pick<RadioProps, "labelColor">>`
  ${({ theme, labelColor }) => css`
    color: ${theme.palette[labelColor!].main};
    margin-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`;

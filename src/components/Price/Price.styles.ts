import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FullPrice = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    height: 3rem;
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.white.main};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: ${theme.palette.secondary.main};
    border-radius: ${theme.border.radius};
  `}
`;

export const Discount = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.gray.main};
    font-weight: ${theme.typography.fontWeightMedium};
    margin-right: ${theme.spacings.xxsmall};
    text-decoration: line-through;
  `}
`;

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .heading {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xsmall} ${theme.spacings.small};

    ${theme.media.greaterThan("xmedium")`
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
    `}

    ${theme.media.greaterThan("large")`
      grid-template-columns: repeat(6, 1fr);
    `}
  `}
`;

export const Block = styled.div``;

export const Label = styled.h3`
  ${({ theme }) => css`
    color: ${theme.palette.gray.main};
    font-size: ${theme.typography.fontSizes.small};
    font-weight: ${theme.typography.fontWeightMedium};

    ${theme.media.greaterThan("medium")`
      font-size: ${theme.typography.fontSizes.medium};

    `}
  `}
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.palette.white.main};
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.white.main};
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.fontSizes.small};

    ${theme.media.greaterThan("xsmall")`
      font-size: ${theme.typography.fontSizes.medium};

    `}

    ${theme.media.greaterThan("medium")`
      font-size: ${theme.typography.fontSizes.large};

    `}
  `}
`;

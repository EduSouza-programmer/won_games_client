import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "@/components/Heading/Heading.styles";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      text-transform: uppercase;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.gridLayout.gutter};
    margin-top: ${theme.spacings.large};

    ${media.greaterThan("medium")`
    grid-template-columns: repeat(4, 1fr);

    `}
  `}
`;

export const Columm = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.palette.gray.main};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.typography.fontSizes.small};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.gray.main};
    font-size: ${theme.typography.fontSizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`;

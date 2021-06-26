import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "@/components/Heading/Heading.styles";
import * as LogoStyles from "@/components/Logo/Logo.styles";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan("medium")`
      grid-template-columns: 1fr 1fr;

    `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;

    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan("medium")`
      display: none;

    `}

    &::after {
      content: "";
      position: absolute;
      background-color: ${theme.palette.black.main};
      opacity: 0.85;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.white.main};
    position: relative;
    z-index: ${theme.zIndex.base};
    display: grid;
    /*  grid-template-columns: 1fr;
    justify-content: space-between; */
    height: 100%;
    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-top: ${theme.spacings.xxsmall};
      font-weight: ${theme.typography.fontWeightMedium};
    }

    strong {
      color: ${theme.palette.primary.main};
    }
  `}
`;

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.xsmall};
    align-self: end;
    text-align: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.palette.white.main};

    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 31rem;

    ${media.greaterThan("medium")`
      width: 36rem;


    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

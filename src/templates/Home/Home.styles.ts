import styled, { css } from "styled-components";

import { darken } from "polished";

import * as HeadingStyles from "@/components/Heading/Heading.styles";
import * as HighlightStyles from "@/components/Highlight/Highlight.styles";

const Sections = styled.section`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`;

export const MainHome = styled.main`
  ${({ theme }) => css`
    margin: calc(${theme.spacings.xxlarge} + 1rem)
      calc((${theme.gridLayout.gutter} / 2) * -1) ${theme.spacings.large};

    ${theme.media.greaterThan("medium")`
      position: relative;
      z-index: ${theme.zIndex.base};
      margin: ${theme.spacings.large} calc((${theme.gridLayout.gutter} / 2) * -1);

    `}
  `}
`;

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${theme.media.greaterThan("medium")`
      margin-bottom: 0;
      padding-top: 15rem;
      padding-bottom: 12rem;
      background-color: ${darken(0.005, theme.palette.lightBg.main)};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);


      ${HeadingStyles.Wrapper} {
        color: ${theme.palette.black.main}
      }
    `}

    ${theme.media.greaterThan("large")`
       margin-top: -17rem;
    `}
  `}
`;

export const SectionMostPopular = styled(Sections)``;

export const SectionUpcomming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`;
export const SectionFreeGames = styled(Sections)``;

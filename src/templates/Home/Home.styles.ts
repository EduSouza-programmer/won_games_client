import * as HeadingStyles from "@/components/Heading/Heading.styles";
import * as HighlightStyles from "@/components/Highlight/Highlight.styles";
import * as GameCardSliderStyles from "@/components/GameCardSlider/GameCardSlider.styles";
import styled, { css } from "styled-components";
import media from "styled-media-query";

const Sections = styled.section`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.large} * 2);

    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan("medium")`
        margin-right: calc((${theme.gridLayout.gutter} / 2) * -1);
        margin-left: calc((${theme.gridLayout.gutter} / 2) * -1);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan("huge")`
        margin-right: calc((${theme.gridLayout.gutter} / 2) * -1);
      `}
    }
  `}
`;

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc((${theme.gridLayout.gutter} / 2) * -1);

    ${media.greaterThan("medium")`

      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.zIndex.base};

    `}
  `}
`;

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan("medium")`
      margin-bottom: 0;
      padding-top: 15rem;
      padding-bottom: 12rem;
      background-color: ${theme.palette.lightBg.main};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);


      ${HeadingStyles.Wrapper} {
        color: ${theme.palette.black.main}
      }
    `}

    ${media.greaterThan("large")`
       margin-top: -13rem;
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

export const SectionFooter = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: 0;
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.palette.white.main};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`;

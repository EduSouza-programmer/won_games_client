import styled, { css } from "styled-components";
import media from "styled-media-query";

import { HighlightProps } from ".";

type WrapperProps = Pick<HighlightProps, "backgroundImage" | "alignment">;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.base};
    max-height: 23rem;
    max-width: 100%;
    grid-area: floatimage;
    align-self: end;
    justify-self: end;

    ${media.greaterThan("medium")`
      max-height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.base};
    padding: ${theme.spacings.xsmall};
    grid-area: content;

    ${media.greaterThan("medium")`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: "floatimage content";
    grid-template-columns: 1fr 2fr;
    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: "content floatimage";
    grid-template-columns: 2fr 1fr;
    ${Content} {
      text-align: left;
    }
  `,
};

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    display: grid;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan("medium")`
      height: 32rem;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.large};
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.white.main};

    ${media.greaterThan("medium")`
    font-size: ${theme.typography.fontSizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.small};
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.palette.white.main};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan("medium")`
    font-size: ${theme.typography.fontSizes.large};
    `}
  `}
`;

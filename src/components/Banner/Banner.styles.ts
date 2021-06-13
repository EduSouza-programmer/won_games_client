import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as RibbonStyles from "@/components/Ribbon/Ribbon.styles";

export const Wrapper = styled.div`
  position: relative;

  ${media.lessThan("medium")`

    ${RibbonStyles.Wrapper} {
      right: 0;

      &::before {
         display: none;

        }
      }

    `}

  ${media.greaterThan("medium")`

      box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);

    `}
`;

const imageBoxModifiers = {
  shimmerEffect: () => css`
    background-image: linear-gradient(
      to right,
      #ffffff 0%,
      #dfdfdf 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 23rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
    ${media.greaterThan("medium")`
      min-height: 58rem;

    `}
  `,
};

type ImageBox = {
  shimmerEffect: boolean;
};

export const ImageBox = styled.div<ImageBox>`
  ${({ theme, shimmerEffect }) => css`
    width: 100%;
    min-height: 23rem;
    background-color: ${theme.palette.black.main};
    display: flex;
    justify-content: center;

    ${shimmerEffect && imageBoxModifiers.shimmerEffect}

    img {
      width: 100%;
      height: 100%;
      min-height: 23rem;
      object-fit: cover;
    }
  `}
`;

/* type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.palette.lightGray.main};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan("medium")`
      height: 58rem;
    `}
  `}
`; */

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};
    ${media.greaterThan("medium")`
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.large};
    font-weight: ${theme.typography.fontWeightBold};
    padding-bottom: ${theme.spacings.xxsmall};
    color: ${theme.palette.white.main};
    ${media.greaterThan("medium")`
      font-size: ${theme.typography.fontSizes.xxlarge};

    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.palette.white.main};
    font-size: ${theme.typography.fontSizes.small};
    font-weight: ${theme.typography.fontWeightMedium};
    padding-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.palette.primary.main};
      font-weight: ${theme.typography.fontWeightBold};
    }

    ${media.greaterThan("medium")`
      font-sizes: ${theme.typography.fontSizes.large};

    `}
  `}
`;

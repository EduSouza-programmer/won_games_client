import Image from "next/image";
import styled, { css, DefaultTheme } from "styled-components";

import Heading from "@/components/Heading";

import * as buttonStyles from "@/components/Button/Button.styles";
import { HighlightProps } from ".";

type WrapperProps = Pick<HighlightProps, "alignment">;

export const BackgroundImage = Image;

export const FloatImage = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.base};

    display: flex;
    align-self: flex-end;
    grid-area: floatimage;

    ${theme.media.lessThan("small")`
      & > div {
        position: absolute !important;
      }

      img {
        width: 22rem !important;
        height: 19rem !important;
      }

    `}

    ${theme.media.lessThan("xsmall")`
      img {
        width: 19rem !important;
        height: 17rem !important;
      }
    `}

    ${theme.media.greaterThan("medium")`
      img {
        height: 32rem !important
      }
    `}
  `}
`;

export const Subtitle = Heading;

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.base};

    display: flex;
    flex-direction: column;
    grid-area: content;

    ${theme.media.greaterThan("medium")`
      align-self: end;
    `}

    .subtitle {
      font-weight: ${theme.typography.fontWeightMedium};
      margin-bottom: ${theme.spacings.xsmall};

      ${theme.media.greaterThan("small")`
          margin-bottom: ${theme.spacings.medium};
      `}
    }

    ${buttonStyles.Wrapper} {
      box-shadow: ${theme.shadows[10]};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 27rem;

    ${theme.media.greaterThan("medium")`
      height: 32rem;
  `}
  `}
`;

const wrapperModifiers = {
  right: (theme: DefaultTheme) => css`
    ${Grid} {
      grid-template-areas: "floatimage content";
      grid-template-columns: 1fr 1.5fr;

      ${FloatImage} {
        justify-self: flex-start;

        ${theme.media.lessThan("small")`
          & > div {
            left: 0;
            bottom: 0;
          }
        `}
      }

      ${Content} {
        justify-self: end;

        padding-top: ${theme.spacings.xsmall};
        padding-bottom: ${theme.spacings.xsmall};
        padding-right: ${theme.spacings.xsmall};

        ${theme.media.greaterThan("medium")`
          padding-top: ${theme.spacings.xlarge};
          padding-bottom: ${theme.spacings.xlarge};
          padding-right: ${theme.spacings.xlarge};

        `}

        ${buttonStyles.Wrapper} {
          align-self: flex-end;
        }
      }
    }
  `,
  left: (theme: DefaultTheme) => css`
    ${Grid} {
      grid-template-areas: "content floatimage";
      grid-template-columns: 1.5fr 1fr;

      ${FloatImage} {
        justify-self: flex-end;
        ${theme.media.lessThan("small")`
          & > div {
            right: 0;
            bottom: 0;
          }
        `}
      }

      ${Content} {
        text-align: left;

        padding-top: ${theme.spacings.xsmall};
        padding-bottom: ${theme.spacings.xsmall};
        padding-left: ${theme.spacings.xsmall};

        ${theme.media.greaterThan("medium")`
          padding-top: ${theme.spacings.xlarge};
          padding-bottom: ${theme.spacings.xlarge};
          padding-left: ${theme.spacings.xlarge};

        `}

        ${buttonStyles.Wrapper} {
          align-self: flex-start;
        }
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, alignment }) => css`
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${wrapperModifiers[alignment!](theme)}
  `}
`;

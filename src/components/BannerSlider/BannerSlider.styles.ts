import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as BannerStyles from "@/components/Banner/Banner.styles";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${media.lessThan("huge")`
      overflow-x: hidden;
      overflow-y: hidden;
    `}

    ${media.lessThan("large")`
      .slick-track,
        .slick-list {
        display: flex;
      }

      .slick-slide > div {
        flex: 1 0 auto;
        height: 100%;
      }

    `}

    ${media.lessThan("medium")`
      .slick-slide > div {
        margin: 0 calc(${theme.spacings.xxsmall} + 3px);

      }

      .slick-list {
        margin: 0 calc((${theme.spacings.xxsmall} + 3px) * -1);
      }
    `}


    .slick-list {
      cursor: pointer;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        background-color: ${theme.palette.white.main};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};

        &.slick-active {
          background-color: ${theme.palette.primary.main};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    ${media.greaterThan("medium")`

      ${BannerStyles.Wrapper} {
          max-width: 80%;
          margin: 0 auto;
        }
    `}

    ${media.greaterThan("large")`
      .slick-dots {
        position: absolute;
        right: 0;
        flex-direction: column;
        height: 100%;
        top:0;
        margin:0;

        li {
            margin: ${theme.spacings.xxsmall} 0;
          }
        }

        .slick-slide > div {
        margin: calc(${theme.spacings.xxsmall} + 3px) 0;
        }

        .slick-list {
        margin: calc((${theme.spacings.xxsmall} + 3px) * -1) 0;
      }

    `}
  `}
`;

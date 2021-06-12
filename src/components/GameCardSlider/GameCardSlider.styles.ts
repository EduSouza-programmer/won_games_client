import styled, { css } from "styled-components";
import media from "styled-media-query";

import { GameCardSliderProps } from ".";

type WrapperProps = Pick<GameCardSliderProps, "arrowColor">;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, arrowColor }) => css`
    ${media.lessThan("huge")`
      overflow-x: hidden;

    `}

    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 calc(${theme.spacings.xxsmall} + 3px);
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 calc((${theme.spacings.xxsmall} + 3px) * -1);
    }

    ${media.greaterThan("large")`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};

      }


      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-prev, .slick-next {
      display: block;
      color: ${theme.palette[arrowColor!].main};
      cursor: pointer;
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;

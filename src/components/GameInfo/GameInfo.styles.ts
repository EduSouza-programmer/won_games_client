import styled, { css } from "styled-components";

import Heading from "@/components/Heading";

export const Description = Heading;

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.palette.white.main};
    padding: ${theme.spacings.large} ${theme.spacings.xsmall}
      ${theme.spacings.medium};
    margin: 0 -${theme.spacings.xsmall};

    ${theme.media.greaterThan("xsmall")`

      padding: ${theme.spacings.large} ${theme.spacings.small}
      ${theme.spacings.medium};
      margin: 0;

    `}

    .description {
      margin-bottom: ${theme.spacings.small};
    }

    ${theme.media.greaterThan("small")`

        padding: ${theme.spacings.medium} ${theme.spacings.small}

    `}
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    .heading {
      margin-top: calc(${theme.spacings.xxsmall} + 2px);
      margin-bottom: calc(${theme.spacings.xsmall} + 2px);
    }

    .price {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 1.6rem;

      ${theme.media.greaterThan("xsmall")`
        right: -14px;

      `}
    }

    ${theme.media.greaterThan("small")`
      display: flex;
      justify-content: space-between;

        .price {
        position: static;
        align-self: flex-start;
      }

    `}
  `}
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > :first-child {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    /* display: grid; */
    ${theme.media.greaterThan("small")`

    flex-direction: row-reverse;
    justify-content: flex-start;

    /* grid-template-columns: auto auto;
    justify-content: end; */

    > :first-child {
      margin-bottom: 0;
    }

    `}
  `}
`;

import styled, { css, DefaultTheme } from "styled-components";

type breakpoint = "xhuge" | "huge" | "large" | "medium" | "small" | "xsmall";

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (theme: DefaultTheme, size: breakpoint) => css`
    ${theme.media.lessThan(size)`display: block`}
  `,
  greaterThan: (theme: DefaultTheme, size: breakpoint) => css`
    ${theme.media.greaterThan(size)`display: block`}
  `,
};

const MediaMatch = styled.div<MediaMatchProps>`
  ${({ theme, lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(theme, lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(theme, greaterThan)}
  `}
`;

export default MediaMatch;

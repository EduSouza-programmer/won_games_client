import styled, { css, DefaultTheme } from "styled-components";

import media from "styled-media-query";

import { HeadingProps, LineColor, ResponsiveFontSizes, Size } from ".";

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColor, size: Size) =>
    css`
      padding-left: ${theme.spacings.xxsmall};
      border-style: solid;
      border-color: ${theme.palette[lineColor].main};
      border-width: 0;

      ${() => {
        switch (size) {
          case "small":
            return css`
              border-left-width: 0.5rem;
            `;
          case "medium":
            return css`
              border-left-width: 0.7rem;
            `;
          case "huge":
            return css`
              border-left-width: 1rem;
            `;

          default:
            return css`
              border-left-width: 0.5rem;
            `;
        }
      }}
    `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColor, size: Size) => css`
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.7rem;

      border-style: solid;
      border-color: ${theme.palette[lineColor].main};
      border-width: 0;
    }

    ${() => {
      switch (size) {
        case "small":
          return css`
            &::after {
              border-top-width: 0.5rem;
              width: 3rem;
            }
          `;
        case "medium":
          return css`
            &::after {
              border-top-width: 0.7rem;
              width: 5rem;
            }
          `;
        case "huge":
          return css`
            &::after {
              border-top-width: 1rem;
              width: 7rem;
            }
          `;

        default:
          return css`
            &::after {
              border-top-width: 0.5rem;
              width: 5rem;
            }
          `;
      }
    }}
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.typography.fontSizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: calc(${theme.typography.fontSizes.xlarge} + 4px);

    ${media.greaterThan("medium")`
      font-size: ${theme.typography.fontSizes.xxlarge};

    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.typography.fontSizes.huge};
  `,

  responsiveSize: (theme: DefaultTheme, obj: ResponsiveFontSizes) => css`
    font-size: calc(
      ${obj.min}px + (${obj.max} - ${obj.min}) *
        ((100vw - 320px) / (1920 - 320))
    );

    ${theme.media.greaterThan("xhuge")`
      font-size: ${obj.max}px;
    `}

    ${obj.isNoWrapperText &&
    css`
      white-space: nowrap;
    `}
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({
    theme,
    color,
    lineLeft,
    lineBottom,
    size,
    lineColor,
    responsiveSize,
  }) => css`
    color: ${theme.palette[color!].main};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!, size)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!, size)}
    ${!!size && wrapperModifiers[size](theme)}
    ${!!responsiveSize &&
    !size &&
    wrapperModifiers.responsiveSize(theme, responsiveSize)}
  `}
`;

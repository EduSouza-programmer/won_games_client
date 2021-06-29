import styled, { css, DefaultTheme } from "styled-components";

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.palette.white.main};
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `}
`;
/*
const ImageBoxModifiers = {
  shimmerEffect: () => css`
    background-image: linear-gradient(
      to right,
      #ffffff 0%,
      #dfdfdf 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `,
}; */

/* type ImageBoxProps = {
  shimmerEffect: boolean;
}; */

export const ImageBox = styled.div`
  ${() => css`
    min-height: 14rem;
    background-color: #f6f7f8;
    position: relative;

    img {
      object-fit: cover;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.medium};
    line-height: ${theme.typography.fontSizes.medium};
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.black.main};
  `}
`;

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSizes.small};
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.gray.main};
  `}
`;

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;

    svg {
      width: 2.5rem;
    }
  `}
`;

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

type PriceProps = {
  isPromotional?: boolean;
};

const priceModifiers = {
  defaultPrice: (theme: DefaultTheme) => css`
    color: ${theme.palette.white.main};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: #3cd3c1;
    border-radius: ${theme.border.radius};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotionalPrice: (theme: DefaultTheme) => css`
    color: ${theme.palette.gray.main};
    font-weight: ${theme.typography.fontWeightMedium};
    margin-right: ${theme.spacings.xxsmall};
    text-decoration: line-through;
  `,
};

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-weight: ${theme.typography.fontWeightBold};
    height: 3rem;
    align-items: center;

    ${!isPromotional && priceModifiers.defaultPrice(theme)}
    ${isPromotional && priceModifiers.promotionalPrice(theme)}
  `}
`;

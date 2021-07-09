import * as S from "./Price.styles";

export type PriceProps = {
  price: string;
  promotionalPrice?: string;
  className?: string;
};

function Price({ price, promotionalPrice, ...props }: PriceProps) {
  return (
    <S.Wrapper {...props}>
      {!!promotionalPrice && (
        <S.Discount
          aria-roledescription="full product price"
          aria-label="full price"
        >
          {price}
        </S.Discount>
      )}
      <S.FullPrice aria-roledescription="the product price" aria-label="price">
        {promotionalPrice || price}
      </S.FullPrice>
    </S.Wrapper>
  );
}

export default Price;

import Image from "next/image";
// import { useState } from "react";
import { FavoriteBorder } from "@styled-icons/material-outlined/FavoriteBorder";
import { Favorite } from "@styled-icons/material-outlined/Favorite";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import Button from "@/components/Button";
import Price, { PriceProps } from "@/components/Price";
import Ribbon, { RibbonColors, RibbonSizes } from "@/components/Ribbon";

import * as S from "./GameCard.styles";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  gamePrice: PriceProps;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

function GameCard({
  title,
  developer,
  img,
  gamePrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "small",
}: GameCardProps) {
  // const [shimmer, setShimmer] = useState(true);
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
      <S.ImageBox /* shimmerEffect={shimmer} */>
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={img}
          src={img}
          alt={title}
          /*        onLoad={() => setShimmer(false)} */
        />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton onClick={onFav} role="button" aria-label="Heart Button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          <Price className="price" {...gamePrice} />
          {/*  {!!promotionalPrice && (
            <S.Price
              aria-label="price"
              aria-roledescription="this price has been promoted a discount"
              isPromotional
            >
              {price}
            </S.Price>
          )}
          <S.Price aria-label="price">{promotionalPrice || price}</S.Price> */}
          <Button
            aria-label="Add to ShoppingCart"
            icon={<AddShoppingCart />}
            size="small"
          />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
}

export default GameCard;

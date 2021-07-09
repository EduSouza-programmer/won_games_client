import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import { FavoriteBorder } from "@styled-icons/material-outlined/FavoriteBorder";

import Heading from "@/components/Heading";
import Price, { PriceProps } from "@/components/Price";
import Button from "@/components/Button";
import * as S from "./GameInfo.styles";

export type GameInfoProps = {
  title: string;
  description: string;
  gamePrice: PriceProps;
};

function GameInfo({ title, description, gamePrice }: GameInfoProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <Heading className="heading" lineBottom size="medium" color="black">
          {title}
        </Heading>
        <Price className="price" {...gamePrice} />
      </S.Container>
      <S.Description
        responsiveSize={{ minFontSizes: 14, maxFontSizes: 18 }}
        color="black"
        as="p"
        className="description"
      >
        {description}
      </S.Description>
      <S.WrapperButton>
        <Button icon={<AddShoppingCart />}>Adicionar</Button>
        <Button href="#" minimal as="a" icon={<FavoriteBorder />}>
          Lista de desejos
        </Button>
      </S.WrapperButton>
    </S.Wrapper>
  );
}

export default GameInfo;

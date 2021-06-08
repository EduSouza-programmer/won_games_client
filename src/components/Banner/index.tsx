import Ribbon, { RibbonSizes, RibbonColors } from "@/components/Ribbon";
import Button from "@/components/Button";
import * as S from "./Banner.styles";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

function Banner({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "normal",
}: BannerProps) {
  return (
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={title} />
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
    </S.Wrapper>
  );
}

export default Banner;

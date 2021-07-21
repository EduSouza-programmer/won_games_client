import Image from "next/image";

import Heading from "@/components/Heading";
import Button from "@/components/Button";
import * as S from "./Highlight.styles";

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: "left" | "right";
};

function Highlight({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = "right",
}: HighlightProps) {
  return (
    <S.Wrapper alignment={alignment}>
      <S.BackgroundImage
        layout="fill"
        src={backgroundImage}
        placeholder="blur"
        blurDataURL={backgroundImage}
        alt={`A background image with title ${title}`}
        objectFit="cover"
      />

      <S.Grid className="oi">
        {!!floatImage && (
          <S.FloatImage>
            <Image width={290} height={270} src={floatImage} alt={title} />
          </S.FloatImage>
        )}
        <S.Content>
          <Heading
            responsiveSize={{
              min: 16,
              max: 30,
              isNoWrapperText: true,
            }}
          >
            {title}
          </Heading>
          <S.Subtitle
            as="h3"
            className="subtitle"
            responsiveSize={{ min: 11, max: 20 }}
          >
            {subtitle}
          </S.Subtitle>
          <Button as="a" href={buttonLink}>
            {buttonLabel}
          </Button>
        </S.Content>
      </S.Grid>
    </S.Wrapper>
  );
}

export default Highlight;

import Link from "next/link";

import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import * as S from "./Auth.styles";

export type AuthProps = {
  title: string;
  children: React.ReactNode;
};

function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/" passHref>
            <a href="replace">
              <Logo id="banner" />
            </a>
          </Link>

          <div>
            <Heading
              responsiveSize={{
                minFontSizes: 14,
                maxFontSizes: 52,
                isNoWrapperText: true,
              }}
            >
              Seus jogos favoritos em <br /> um só lugar
            </Heading>
            <S.Subtitle>
              <Heading
                as="h3"
                responsiveSize={{ minFontSizes: 10, maxFontSizes: 22 }}
              >
                <strong>WON</strong> is the best and most complete gaming
                platform.
              </Heading>
            </S.Subtitle>
          </div>
          <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/" passHref>
            <a href="replace">
              <Logo id="content" color="black" size="large" />
            </a>
          </Link>

          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
}

export default Auth;

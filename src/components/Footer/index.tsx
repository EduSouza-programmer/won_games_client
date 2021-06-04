import Link from "next/link";

import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import * as S from "./Footer.styles";

function Footer() {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Columm>
          <Heading color="black" lineColor="secondary" size="small" lineBottom>
            Contact
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Columm>

        <S.Columm>
          <Heading color="black" lineColor="secondary" size="small" lineBottom>
            Follow us
          </Heading>
          <nav aria-labelledby="social media">
            <a href="https://" target="_blank" rel="noopenner, noreferrer">
              Instagram
            </a>
            <a href="https://" target="_blank" rel="noopenner, noreferrer">
              Twitter
            </a>
            <a href="https://" target="_blank" rel="noopenner, noreferrer">
              Youtube
            </a>
            <a href="https://" target="_blank" rel="noopenner, noreferrer">
              Facebook
            </a>
          </nav>
        </S.Columm>

        <S.Columm>
          <Heading color="black" lineColor="secondary" size="small" lineBottom>
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a href="@/">Home</a>
            </Link>
            <Link href="/games">
              <a href="@">Store</a>
            </Link>
            <Link href="/games">
              <a href="@">Busca</a>
            </Link>
          </nav>
        </S.Columm>

        <S.Columm aria-labelledby="footer-contact">
          <Heading color="black" lineColor="secondary" size="small" lineBottom>
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Columm>
      </S.Content>
      <S.Copyright>Won Games 2020 ©️ All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
}

export default Footer;

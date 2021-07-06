import Link from "next/link";
import { useState, useCallback } from "react";
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined/ShoppingCart";
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill/Menu2";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

import MediaMatch from "@/components/MediaMatch";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import * as S from "./Menu.styles";

export type MenuProps = {
  username?: string;
};

function Menu({ username }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollUnlock = useCallback(() => {
    const scrollPage = document.querySelector("body") as HTMLElement;
    scrollPage.style.overflow = "visible";
  }, []);

  const scrollLock = useCallback(() => {
    const scrollPage = document.querySelector("body") as HTMLElement;
    scrollPage.style.overflow = "hidden";
  }, []);

  const handleOpenClose = useCallback(() => {
    if (!isOpen) {
      scrollLock();
      setIsOpen(true);
      return;
    }
    scrollUnlock();
    setIsOpen(false);
  }, [isOpen, scrollLock, scrollUnlock]);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={handleOpenClose}>
          <MenuIcon role="img" aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon role="img" aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon role="img" aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!username && (
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.BackgroundImage
          layout="fill"
          src="/img/auth-bg.jpg"
          objectFit="cover"
        />
        <CloseIcon
          onClick={handleOpenClose}
          role="img"
          aria-label="Close Menu"
        />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button
                onClickCapture={scrollUnlock}
                as="a"
                fullWidth
                size="large"
              >
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount onClickCapture={scrollUnlock}>
                Sign Up
              </S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
}

export default Menu;

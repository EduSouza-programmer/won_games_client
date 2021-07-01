import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;

    ${media.lessThan("medium")`
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: ${theme.zIndex.menu};
      background: ${theme.palette.mainBg.main};
      padding-left: ${theme.spacings.xsmall};
      padding-right: ${theme.spacings.xsmall};
    `}
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.white.main};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan("medium")`
    position: absolute;
    left: 50%;
   transform: translateX(-50%);

  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div + div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan("medium")`

    margin-left: ${theme.spacings.small};

    `}
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.palette.white.main};
    font-size: ${theme.typography.fontSizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.palette.primary.main};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      color: ${theme.palette.white.main};
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.typography.fontSizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.palette.primary.main};
    border-bottom: 0.2rem solid ${theme.palette.primary.main};
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.palette.white.main};
    background: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    z-index: ${theme.zIndex.menu};
    position: fixed;
    inset: 0;
    /*  top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isOpen ? "all" : "none"};
    opacity: ${isOpen ? 1 : 0};

    &::after {
      content: "";
      background-color: ${theme.palette.mainBg.main};
      opacity: 0.8;
      position: absolute;
      inset: 0;
    }

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.palette.white.main};
      z-index: calc(${theme.zIndex.menu} + 1);
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      z-index: ${theme.zIndex.menu};
    }

    ${MenuLink} {
      font-weight: ${theme.typography.fontWeightBold};
      font-size: ${theme.typography.fontSizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? "translateY(0)" : "TranslateY(10rem)"};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? "translateY(0)" : "TranslateY(10rem)"};
      transition: transform 0.3s ease-in-out;
      z-index: ${theme.zIndex.menu};
    }
  `}
`;

import * as S from "./Ribbon.styles";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "normal" | "small";

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

function Ribbon({ children, color = "primary", size = "normal" }: RibbonProps) {
  return (
    <S.Wrapper size={size} color={color}>
      {children}
    </S.Wrapper>
  );
}

export default Ribbon;

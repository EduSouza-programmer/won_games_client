import * as S from "./Heading.styles";

export type LineColor = "primary" | "secondary" | undefined;

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: "small" | "medium";
  lineColor?: LineColor;
};

function Heading({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  size = "medium",
  lineColor = "primary",
}: HeadingProps) {
  return (
    <S.Wrapper
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
    >
      {children}
    </S.Wrapper>
  );
}

export default Heading;

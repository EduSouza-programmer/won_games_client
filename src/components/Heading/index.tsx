import { HtmlHTMLAttributes } from "react";

import * as S from "./Heading.styles";

export type LineColor = "primary" | "secondary";

export type Size = "small" | "medium" | "huge" | undefined;

export type ResponsiveFontSizes = {
  min: number;
  max: number;
  isNoWrapperText?: boolean;
};

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: Size;
  lineColor?: LineColor;
  responsiveSize?: ResponsiveFontSizes;
  as?: React.ElementType;
} & HtmlHTMLAttributes<HTMLHeadingElement>;

function Heading({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  size,
  lineColor = "primary",
  responsiveSize,
  as,
  ...props
}: HeadingProps) {
  return (
    <S.Wrapper
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
      responsiveSize={responsiveSize}
      as={as}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
}

export default Heading;

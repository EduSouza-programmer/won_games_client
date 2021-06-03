import { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styles";

export type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  size = "medium",
  fullWidth = false,
  icon,
  ...restProps
}: ButtonProps) {
  return (
    <S.Wrapper
      fullWidth={fullWidth}
      size={size}
      hasIcon={!!icon}
      {...restProps}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}

export default Button;

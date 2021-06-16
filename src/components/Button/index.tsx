import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as S from "./Button.styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  minimal?: boolean;
} & ButtonTypes;

function Button({
  children,
  size = "medium",
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      minimal={minimal}
      fullWidth={fullWidth}
      size={size}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}

export default Button;

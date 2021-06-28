import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import * as S from "./Button.styles";

export type Sizes = {
  small?: "small";
  medium?: "medium";
  large?: "large";
};

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  minimal?: boolean;
  resposiveSizes?: Sizes;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.wrapperProps, ButtonProps> = (
  {
    children,
    size = "medium",
    fullWidth = false,
    icon,
    minimal = false,
    resposiveSizes,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      minimal={minimal}
      fullWidth={fullWidth}
      size={size}
      hasIcon={!!icon}
      ref={ref}
      resposiveSizes={resposiveSizes}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default forwardRef(Button);

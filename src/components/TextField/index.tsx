import { InputHTMLAttributes, useRef, useCallback, useState } from "react";
import * as S from "./TextField.styles";

type InputValue = string | ReadonlyArray<string> | number;

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  onValue?: (value?: InputValue) => void;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function TextField({
  label,
  labelFor,
  onValue,
  icon,
  iconPosition = "left",
  disabled = false,
  error,
  ...props
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFilled, setIsFilled] = useState(false);

  const handleColorIcon = useCallback(() => {
    if (inputRef.current?.value) {
      setIsFilled(true);
      return;
    }
    setIsFilled(false);
  }, []);

  const onChange = useCallback(() => {
    if (onValue) {
      onValue(inputRef.current?.value);
    }
  }, [onValue]);
  return (
    <S.Wrapper
      error={error}
      disabled={disabled}
      iconPosition={iconPosition}
      hasIcon={!!icon}
      isFilledIconColor={isFilled}
    >
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          onBlur={handleColorIcon}
          id={labelFor}
          type="text"
          ref={inputRef}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
}

export default TextField;

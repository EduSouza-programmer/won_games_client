import { InputHTMLAttributes, useRef, useCallback } from "react";
import * as S from "./Radio.styles";

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
  onCheck?: (radioValue?: RadioValue) => void;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

function Radio({
  label,
  labelFor,
  labelColor = "white",
  onCheck,
  value,
  ...props
}: RadioProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback(() => {
    if (onCheck) {
      onCheck(inputRef.current?.value);
    }
  }, [onCheck]);
  return (
    <S.Wrapper>
      <S.Radio
        onChange={onChange}
        ref={inputRef}
        type="radio"
        id={labelFor}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}

export default Radio;

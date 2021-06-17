import { useState, useCallback, InputHTMLAttributes } from "react";
import * as S from "./Checkbox.styles";

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: "black" | "white";
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

function Checkbox({
  label,
  labelFor = "",
  labelColor = "white",
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  const onChange = useCallback(() => {
    const toogle = !checked;
    setChecked(toogle);

    if (onCheck) {
      onCheck(toogle);
    }
  }, [onCheck, checked]);

  return (
    <S.Wrapper>
      <S.Input
        onChange={onChange}
        id={labelFor}
        type="checkbox"
        checked={checked}
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

export default Checkbox;

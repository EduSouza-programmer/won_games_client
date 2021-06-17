import { useCallback, InputHTMLAttributes, useRef } from "react";
import * as S from "./Checkbox.styles";

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: "black" | "white";
  onCheck?: (status: boolean) => void;
  // isChecked?: boolean;
  checked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

function Checkbox({
  label,
  labelFor = "",
  labelColor = "white",
  onCheck,
  // isChecked,
  checked,
  value,
  ...props
}: CheckboxProps) {
  /* const [checked, setChecked] = useState(isChecked);

  const onChange = useCallback(() => {
    const toogle = !checked;
    setChecked(toogle);

    if (onCheck) {
      onCheck(toogle);
    }
  }, [onCheck, checked]); */

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback(() => {
    if (onCheck) {
      onCheck(!!inputRef.current?.checked);
    }
  }, [onCheck]);

  return (
    <S.Wrapper>
      <S.Input
        onChange={onChange}
        id={labelFor}
        type="checkbox"
        ref={inputRef}
        value={value}
        defaultChecked={checked}
        // checked={checked}
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

import * as S from "./Base.styles";

export type BaseProps = {
  example: string;
};

function Base() {
  return (
    <S.Wrapper>
      <h1>Base</h1>
    </S.Wrapper>
  );
}

export default Base;

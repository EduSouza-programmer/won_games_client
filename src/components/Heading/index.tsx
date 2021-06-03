import * as S from "./Heading.styles";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
};

function Heading({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) {
  return (
    <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
      <>
        <h1>initial refactory</h1>
      </>
    </S.Wrapper>
  );
}

export default Heading;

import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

import * as S from "./Base.styles";

export type BaseProps = {
  children: React.ReactNode;
};

function Base({ children }: BaseProps) {
  return (
    <section>
      <Container>
        <Menu />
      </Container>
      {children}
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}

export default Base;

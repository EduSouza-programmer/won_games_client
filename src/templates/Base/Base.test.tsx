import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Base from ".";

jest.mock("@/components/Menu", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="Mock Menu" />,
  };
});

jest.mock("@/components/Footer", () => {
  return {
    __esModule: true,
    default: function myMock() {
      return <div data-testid="Mock Footer" />;
    },
  };
});

describe("<Base />", () => {
  it("should render menu, footer an children", () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    );

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /heading/i })
    ).toBeInTheDocument();
  });
});

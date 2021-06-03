import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Menu from ".";

describe("<Menu />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Menu />);

    expect(screen.getByRole("heading", { name: /Menu/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

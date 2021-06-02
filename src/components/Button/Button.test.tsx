import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Button from ".";

describe("<Button />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Button />);

    expect(
      screen.getByRole("heading", { name: /Button/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

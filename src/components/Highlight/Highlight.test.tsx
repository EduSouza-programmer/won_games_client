import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Highlight from ".";

describe("<Highlight />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Highlight />);

    expect(
      screen.getByRole("heading", { name: /Highlight/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

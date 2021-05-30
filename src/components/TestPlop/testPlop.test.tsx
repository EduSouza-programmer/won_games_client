import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import TestPlop from ".";

describe("<TestPlop />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<TestPlop />);

    expect(
      screen.getByRole("heading", { name: /TestPlop/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

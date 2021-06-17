import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Radio from ".";

describe("<Radio />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Radio />);

    expect(screen.getByRole("heading", { name: /Radio/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

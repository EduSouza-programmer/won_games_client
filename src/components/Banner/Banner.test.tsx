import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Banner from ".";

describe("<Banner />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Banner />);

    expect(
      screen.getByRole("heading", { name: /Banner/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Slider from ".";

describe("<Slider />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Slider />);

    expect(
      screen.getByRole("heading", { name: /Slider/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
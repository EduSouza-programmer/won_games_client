import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import MediaMatch from ".";

describe("<MediaMatch />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<MediaMatch />);

    expect(
      screen.getByRole("heading", { name: /MediaMatch/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

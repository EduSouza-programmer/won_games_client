import { render, screen } from "@testing-library/react";

import TestPlop from ".";

describe("<TestPlop />", () => {
  it("should render the heading", () => {
    const { container } = render(<TestPlop />);

    expect(
      screen.getByRole("heading", { name: /TestPlop/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

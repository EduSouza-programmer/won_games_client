import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Auth from ".";

describe("<Auth />", () => {
  it("should render all components and children", () => {
    renderWithTheme(
      <Auth title="my title">
        <input type="text" />
      </Auth>
    );

    const logos = screen.getAllByRole("img", { name: /won games/i });
    expect(logos).toHaveLength(2);

    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(3);

    const headingRight = screen.getByRole("heading", { name: /my title/i });
    expect(headingRight).toBeInTheDocument();

    const children = screen.getByRole("textbox");
    expect(children).toBeInTheDocument();
  });
});

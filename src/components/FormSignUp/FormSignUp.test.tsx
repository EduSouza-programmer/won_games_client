import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import FormSignUp from ".";

describe("<FormSignUp />", () => {
  it("should render the forms inputs", () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText(/password/i)).toHaveLength(2);
    expect(
      screen.getByRole("button", { name: /sign up now/i })
    ).toBeInTheDocument();
  });

  it("should render text and link correctly", () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByText(/already have an account?/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
  });
});

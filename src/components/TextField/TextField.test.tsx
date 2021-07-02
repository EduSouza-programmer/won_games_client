import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";
import userEvent from "@testing-library/user-event";
import { Email } from "@styled-icons/material-outlined/Email";

import TextField from ".";

describe("<TextField />", () => {
  it("should render with label", () => {
    renderWithTheme(<TextField label="my label" labelFor="label" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/my label/i)).toHaveAttribute("id", "label");
    expect(screen.getByText(/my label/i)).toHaveAttribute("for", "label");
  });

  it("should render without label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByText(/my label/i)).not.toBeInTheDocument();
    expect(screen.getByRole("textbox").parentElement?.childElementCount).toBe(
      1
    );
  });

  it("should render with placeholder when passed", () => {
    renderWithTheme(<TextField placeholder="my placeholder" />);

    expect(screen.getByPlaceholderText(/my placeholder/i)).toBeInTheDocument();
  });

  it("should dispatch onCheck when onchange event happen ", async () => {
    const onValue = jest.fn();

    renderWithTheme(<TextField onValue={onValue} />);

    expect(onValue).not.toHaveBeenCalled();

    const input = screen.getByRole("textbox");
    const text = "my text any here";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onValue).toHaveBeenCalledTimes(text.length);
    });
    expect(onValue).toHaveBeenCalledWith(text);
  });

  it("should accessibly when tab is press", () => {
    renderWithTheme(<TextField label="my label" labelFor="label" />);

    expect(document.body).toHaveFocus();

    const input = screen.getByLabelText(/my label/i);

    userEvent.tab();
    expect(document.body).not.toHaveFocus();
    expect(input).toHaveFocus();
    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it("should render TextField with icon", () => {
    renderWithTheme(<TextField icon={<Email data-testid="my icon" />} />);

    expect(screen.getByTestId(/my icon/i)).toBeInTheDocument();
  });

  it("should render with icon in position left by default", () => {
    renderWithTheme(<TextField icon={<Email data-testid="my icon" />} />);

    expect(screen.getByTestId(/my icon/i).parentElement).toHaveStyle({
      order: "0",
    });
  });

  it("should render with icon in position right when passed", () => {
    renderWithTheme(
      <TextField iconPosition="right" icon={<Email data-testid="my icon" />} />
    );

    expect(screen.getByTestId(/my icon/i).parentElement).toHaveStyle({
      order: 1,
    });
  });

  it("should render a colored icon when the input value is filled", async () => {
    const onValue = jest.fn();
    renderWithTheme(
      <TextField onValue={onValue} icon={<Email data-testid="my icon" />} />
    );

    const input = screen.getByRole("textbox");
    const text = "my text";

    userEvent.type(input, text);
    userEvent.tab();

    await waitFor(() => {
      expect(screen.getByTestId(/my icon/i).parentElement).toHaveStyle({
        color: "#F231A5",
      });
    });
  });

  it("should render TextField disabled when is passed", async () => {
    const onValue = jest.fn();

    renderWithTheme(<TextField disabled onValue={onValue} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeDisabled();

    const text = "any text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onValue).not.toHaveBeenCalled();
  });

  it("should render a not accessibly when disabled is passed", () => {
    renderWithTheme(<TextField disabled />);

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(screen.getByRole("textbox")).not.toHaveFocus();
  });

  it("should render a error when happen", () => {
    const { container } = renderWithTheme(<TextField error="my error" />);

    expect(screen.getByText(/my erro/i)).toBeInTheDocument();
    expect(container.firstChild?.lastChild).toHaveStyle({ color: "#FF5F5F" });
  });
});

import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import Radio from ".";

describe("<Radio />", () => {
  it("should render with label", () => {
    const { container } = renderWithTheme(
      <Radio label="Radio label" labelFor="radio" />
    );

    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument();
    expect(screen.getByText(/radio label/i)).toHaveAttribute("for", "radio");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render without label", () => {
    renderWithTheme(<Radio />);
    expect(screen.getByRole("radio").parentElement?.childElementCount).toBe(1);
  });

  it("should render label color white by default", () => {
    renderWithTheme(<Radio label="my label" labelFor="radio" />);

    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: "#FAFAFA",
    });
  });
  it("should render label color black when passed", () => {
    renderWithTheme(
      <Radio label="my label" labelFor="radio" labelColor="black" />
    );

    expect(screen.getByText(/my label/i)).toHaveStyle({
      color: "#030517",
    });
  });
  it("should dispatch onCheck when click event happen", async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Radio
        label="my label"
        labelFor="radio"
        onCheck={onCheck}
        value="my value"
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText(/my label/i));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith("my value");
  });

  it("should be accessible with tab", async () => {
    renderWithTheme(<Radio label="my label" labelFor="radio" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByLabelText(/my label/i)).toHaveFocus();
    userEvent.tab();
    expect(screen.getByLabelText(/my label/)).not.toHaveFocus();
  });
});

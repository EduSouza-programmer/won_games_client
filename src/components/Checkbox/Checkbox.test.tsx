import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import Checkbox from ".";

describe("<Checkbox />", () => {
  it("should render with label", () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render without label", () => {
    renderWithTheme(<Checkbox />);

    expect(screen.getByRole("checkbox").parentElement?.childElementCount).toBe(
      1
    );
  });

  it("should render a label color white by default", () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: "#FAFAFA",
    });
  });
  it("should render with black label", () => {
    renderWithTheme(
      <Checkbox labelColor="black" label="checkbox label" labelFor="check" />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: "#030517",
    });
  });

  it("should dispatch onCheck when status changes", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it("should dispatch onCheck called with false when isChecked passed", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} checked />);

    userEvent.click(screen.getByRole("checkbox"));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it("should be accessible with tab", () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="check" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(document.body).not.toHaveFocus();
    expect(screen.getByRole("checkbox")).toHaveFocus();
  });
});

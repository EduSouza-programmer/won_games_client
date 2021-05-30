import { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import { render, RenderResult } from "@testing-library/react";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);

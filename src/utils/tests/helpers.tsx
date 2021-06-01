import { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";

import ThemeProvider from "@/components/ThemeProvider";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);

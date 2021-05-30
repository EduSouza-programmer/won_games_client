import React from "react";

import "@material-ui/core/styles/createMuiTheme";

import {
  PaletteColor,
  PaletteColorOptions,
} from "@material-ui/core/styles/createPalette";

import "@material-ui/core/styles/zIndex";
import "@material-ui/core/styles/createTypography";

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface Theme {
    icons: {
      User: React.ComponentType;
    };
    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    gridLayout: {
      container: string;
      gutter: string;
    };
  }
  export interface ThemeOptions {
    icons?: {
      User?: React.ComponentType;
    };
    spacings?: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    gridLayout?: {
      container: string;
      gutter: string;
    };
  }
}

declare module "@material-ui/core/styles/createPalette" {
  export interface Palette {
    mainBg: PaletteColor;
    lightBg: PaletteColor;
    white: PaletteColor;
    black: PaletteColor;
    lightGray: PaletteColor;
    gray: PaletteColor;
    darkGray: PaletteColor;
    red: PaletteColor;
  }
  export interface PaletteOptions {
    mainBg?: PaletteColorOptions;
    lightBg?: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    lightGray?: PaletteColorOptions;
    gray?: PaletteColorOptions;
    darkGray?: PaletteColorOptions;
    red?: PaletteColorOptions;
  }
}

declare module "@material-ui/core/styles/zIndex" {
  export interface ZIndex {
    base: number;
    menu: number;
    overlay: number;
    myModal: number;
    alwaysOnTop: number;
  }
  export interface ZIndexOptions {
    base?: number;
    menu?: number;
    overlay?: number;
    myModal?: number;
    alwaysOnTop?: number;
  }
}

declare module "@material-ui/core/styles/createTypography" {
  export interface Typography {
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
    };
  }
  export interface TypographyOptions {
    fontSizes?: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
    };
  }
}

import React from "react";

import "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface Theme {
    icons: {
      User: React.ComponentType;
    };
  }
  export interface ThemeOptions {
    icons?: {
      User?: React.ComponentType;
    };
  }
}

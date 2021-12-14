import React from "react";
import { theme } from "./constants/theme";
import Router from "./router"

import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";

const ThemeProvider = () => {

    return (
        <MaterialThemeProvider theme={theme}>
            <Router />
        </MaterialThemeProvider>
    );
};

export default ThemeProvider;

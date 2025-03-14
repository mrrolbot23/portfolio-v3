// @ts-ignore
import React from "react";
import {Navbar} from "./navbar/Navbar";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    colorSchemes: {
        dark: true,
    }
});

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar/>
            </ThemeProvider>
        </>
    )
}

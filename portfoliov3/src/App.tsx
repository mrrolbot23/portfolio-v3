// @ts-ignore
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {Header} from "./header/Header.tsx";

const theme = createTheme({
    colorSchemes: {
        dark: true,
    }
});

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header/>
            </ThemeProvider>
        </>
    )
}

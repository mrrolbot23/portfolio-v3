// @ts-ignore
import React from "react";
import {AppBar, Box, Button, IconButton, Stack, Toolbar} from "@mui/material";
import logo from "../assets/ER_logo.png";

export const Navbar = () => {
    return (
        <>
            <Box sx={{flexGrow: 1}} marginX={7}>
                <AppBar elevation={0} position="static" aria-label={"navbar"} color={"transparent"}>
                    <Toolbar sx={{justifyContent: "space-between"}}>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="brand-logo"
                        >
                            <img src={logo} width={50} />
                        </IconButton>
                        <Stack sx={{display: "flex", flexDirection: "row"}}>
                            <Button aria-label={"home-button"} sx={{fontSize: "large"}} color={"inherit"}>
                                Home
                            </Button>
                            <Button aria-label={"about-me"} sx={{fontSize: "large"}} color={"inherit"}>
                                About Me
                            </Button>
                            <Button aria-label={"work-button"} sx={{fontSize: "large"}} color={"inherit"}>
                                Work
                            </Button>
                            <Button aria-label={"cve-button"} sx={{fontSize: "large"}} color={"inherit"}>
                                CVE
                            </Button>
                            <Button aria-label={"contact-button"} sx={{fontSize: "large"}} color={"inherit"}>
                                Let's Talk
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
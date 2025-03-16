// @ts-ignore
import React from "react";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import logo from "../assets/ER_logo.png";
import "../Main.css"

export const About = () => {
    return (
        <>
            <Stack
                className={"about-screen"}
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={5}
                // mt={25}
            >
                <Stack textAlign={"center"} width={200} sx={{background: "black"}}>
                    <img src={logo}/>
                </Stack>
                <Stack width={500} textAlign={"center"}>
                    <Typography variant={"h1"} aria-label={"about-me-header"} fontWeight={"bold"}>ABOUT ME</Typography>
                    <Typography variant={"body1"} aria-label={"introduction"} padding={2}>
                        I’m a Software Engineer and Systems Developer in the U.S. Army, specializing in designing and
                        building secure, scalable applications. With experience across frontend and backend
                        technologies, I thrive in solving complex problems and creating innovative solutions. Passionate
                        about continuous learning and excellence, I embrace new challenges and adapt quickly to evolving
                        technologies. As a collaborative team player, I enjoy working alongside others to deliver
                        impactful software solutions. Let’s build something great together!
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}
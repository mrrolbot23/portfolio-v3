// @ts-ignore
import React from "react";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import logo from "../assets/ER_logo.png";
import "../Main.css"
import { motion } from "motion/react";

export const About = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Stack
                    className={"about-screen"}
                    display={"flex"}
                    flexDirection={"row"}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={5}
                >
                    <Stack textAlign={"center"} width={200} >
                        <img src={logo}/>
                        <Typography variant={"body1"} color={"grey"}>- Edwin Roldan</Typography>
                    </Stack>
                    <Stack width={500} textAlign={"center"}>
                        <Typography variant={"h3"} aria-label={"about-me-header"} fontWeight={"bold"} letterSpacing={2}>ABOUT
                            ME</Typography>
                        <Typography variant={"body1"} aria-label={"introduction"} padding={2}>
                            I’m a Software Engineer and Systems Developer in the U.S. Army, specializing in designing
                            and
                            building secure, scalable applications. With experience across frontend and backend
                            technologies, I thrive in solving complex problems and creating innovative solutions.
                            Passionate
                            about continuous learning and excellence, I embrace new challenges and adapt quickly to
                            evolving
                            technologies. As a collaborative team player, I enjoy working alongside others to deliver
                            impactful software solutions. Let’s build something great together!
                        </Typography>
                    </Stack>
                </Stack>
            </motion.div>
        </>
    )
}

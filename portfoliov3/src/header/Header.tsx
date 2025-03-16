// @ts-ignore
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeblurRoundedIcon from '@mui/icons-material/DeblurRounded';
import {Stack} from "@mui/material";
import {motion} from "motion/react";
import Button from "@mui/material/Button";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Header = () => {
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
                <Box mt={25} textAlign={"center"}>
                    <Typography variant={"body2"} textAlign={"center"} color={"grey"}>Developing Since 2021</Typography>
                    <Typography variant={"h1"} textAlign={"center"} fontWeight={"bolder"}
                                sx={{letterSpacing: 16}}>EDWIN</Typography>
                    <Typography variant={"h1"} textAlign={"center"} color={"#A31D1D"}>ROLDAN</Typography>
                    <DeblurRoundedIcon fontSize={"large"} sx={{mb: 2}}/>
                    <Stack width={"22rem"} margin={"auto"}>
                        <Typography variant={"body1"} color={"grey"}>I'm Edwin Roldan - an experienced <span
                            style={{color: "#A31D1D"}}>Software Engineer </span>
                            Building innovative products and a seamless user experience.</Typography>
                    </Stack>
                    <Stack width={"350px"} margin={"auto"} mt={2} display={"flex"} flexDirection={"row"} gap={2}>
                        <Button sx={{color: "#A31D1D", border: "solid 2px", borderRadius: "15px"}} variant={"outlined"} href={""} target={"_blank"}>Download CV</Button>
                        <Button sx={{color: "#A31D1D", border: "solid 2px", borderRadius: "15px"}} variant={"outlined"} href={"https://www.linkedin.com/in/edwin-roldan"} target={"_blank"}><LinkedInIcon/></Button>
                        <Button sx={{color: "#A31D1D", border: "solid 2px", borderRadius: "15px"}} variant={"outlined"} href={"https://github.com/mrrolbot23"} target={"_blank"}><GitHubIcon/></Button>
                    </Stack>
                </Box>
            </motion.div>
        </>
    )
}
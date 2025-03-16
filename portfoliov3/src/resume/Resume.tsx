// @ts-ignore
import React from "react";
import Typography from "@mui/material/Typography";
import {Card, CardContent, CardHeader, Stack} from "@mui/material";
import Button from "@mui/material/Button";

export const Resume = () => {
    return (
        <>
            <Typography variant={"h3"} textAlign={"center"} fontWeight={"bold"} mt={8}>C<span
                style={{color: "#A31D1D"}}>V</span></Typography>
            <Stack display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} gap={5} mt={10}>
                <Stack display={"flex"} flexDirection={"column"} gap={5} padding={1}>
                    <Button sx={{
                        backgroundColor: "rgba(163,29,29,0.68)",
                        color: "beige",
                        borderRadius: "15px"
                    }}>Experience</Button>
                    <Button sx={{
                        backgroundColor: "rgba(163,29,29,0.68)",
                        color: "beige",
                        borderRadius: "15px"
                    }}>Skills</Button>
                    <Button sx={{
                        backgroundColor: "rgba(163,29,29,0.68)",
                        color: "beige",
                        borderRadius: "15px"
                    }}>Education</Button>
                </Stack>
                <Stack width={400}>
                    <Typography variant={"h4"} color={"#A31D1D"}>Experience</Typography>
                    <Typography variant={"body1"} sx={{color: "#181C14"}}>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset
                    </Typography>

                </Stack>
            </Stack>
            <Stack display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} mt={2} gap={2}>
                <Card sx={{borderRadius: "15px"}}>
                    <CardContent>
                        <Typography variant={"h5"}>Software Engineer</Typography>
                        <Typography variant={"body1"} sx={{color: "#A31D1D"}}>2023 - Present</Typography>
                        <Typography variant={"h6"} sx={{color: "darkslategrey"}}>AFC Army Software Factory</Typography>
                    </CardContent>
                </Card>
                <Card sx={{borderRadius: "15px"}}>
                    <CardContent>
                        <Typography variant={"h5"}>Systems Engineer</Typography>
                        <Typography variant={"body1"} sx={{color: "#A31D1D"}}>2018 - 2023</Typography>
                        <Typography variant={"h6"} sx={{color: "darkslategrey"}}>AFC Army Software Factory</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </>
    )
}
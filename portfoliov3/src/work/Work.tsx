// @ts-ignore
import React from "react";
import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, CardMedia, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import recentProjects from "./helper/recentProjects.ts";

export const Work = () => {
    return (
        <>
            <Typography variant={"h2"} textAlign={"center"} fontWeight={"bold"} mt={8}>RECENT WORK</Typography>
            <Stack alignItems={"center"} mt={5} padding={5} display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} gap={5}>
                {recentProjects.map((project) => {
                    return (
                        <Card sx={{maxWidth: 345, height: 500}}>
                            <CardMedia
                                sx={{height: 240}}
                                image={project.image}
                                title="coin tracker"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    color={"inherit"}
                                    size="small"
                                    href={project.gitHub}
                                    target={"_blank"}
                                    sx={{fontWeight: "bold", fontSize: "16px"}}
                                >
                                    Code
                                </Button>
                                <Button
                                    color={"inherit"}
                                    size="small"
                                    href={project.liveDemo}
                                    target={"_blank"}
                                    sx={{fontWeight: "bold", fontSize: "16px"}}
                                >
                                    Live Project
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </Stack>
        </>
    )
}
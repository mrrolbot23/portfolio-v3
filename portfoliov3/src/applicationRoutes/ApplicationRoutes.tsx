// @ts-ignore
import React from "react";
import Navbar from "../navbar/Navbar.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import App from "../App.tsx";
import {About} from "../about/About.tsx";
import {Work} from "../work/Work.tsx";
import {Resume} from "../resume/Resume.tsx";

export const ApplicationRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route index element={<App />}/>
                    <Route path={"/Home"} element={<App />}/>
                    <Route path={"/About"} element={<About />}/>
                    <Route path={"/Work"} element={<Work />}/>
                    <Route path={"/CV"} element={<Resume />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
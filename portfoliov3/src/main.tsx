import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "./Main.css"
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {About} from "./about/About.tsx";
import Navbar from "./navbar/Navbar.tsx";
import {Work} from "./work/Work.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<App />}/>
                <Route path={"/Home"} element={<App />}/>
                <Route path={"/About"} element={<About />}/>
                <Route path={"/Work"} element={<Work />}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)

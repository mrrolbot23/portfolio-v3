import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "./Main.css"
import {ApplicationRoutes} from "./applicationRoutes/ApplicationRoutes.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApplicationRoutes/>
    </StrictMode>,
)

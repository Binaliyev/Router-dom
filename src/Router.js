import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./Home";
import { User, Users } from "./mens";
import { About } from "./About";
export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/*" element={<Home/>}>
        <Route index element={<Users/>}/>
        <Route path="home" element={<Users/>}/>
        <Route path="user/:id" element={<User/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<h1>Contact</h1>}/>
        </Route>
        </>
    )
)
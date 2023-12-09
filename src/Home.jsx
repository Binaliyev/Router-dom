import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Home = () => {
    return(
    <>
        <Header/>
        <Outlet/>
    </>
    )
}
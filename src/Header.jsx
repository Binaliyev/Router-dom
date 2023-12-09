import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <header className="bg-light shadow">
            <div className="container">
                <div className="header-inner d-flex align-items-center justify-content-between">
                    <h1><NavLink className="text-decoration-none">Logo</NavLink></h1>
                    <ul className="w-50 d-flex justify-content-between align-items-center list-unstyled" >
                        <li>
                            <NavLink className={(params) => params.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/home"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={(params) => params.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className={(params) => params.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/contact"} >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
import react from "react"
import reactDOM from "react-dom/client"
import { App } from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ContextProvider } from "./Context"
let root = reactDOM.createRoot(document.querySelector("#root"))
root.render(
    <>
    {/* <ContextProvider> */}
        <App/>
    {/* </ContextProvider> */}
    </>
)
import { createContext } from "react";

export const Context = createContext()
console.log(Context);
export const ContextProvider = ({children}) => {
    <Context.Provider>
        {children}
    </Context.Provider>
}
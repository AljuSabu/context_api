import {  createContext, useState } from "react";

const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <AuthenticationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthenticationContext.Provider>
    )
}

export default AuthenticationContext
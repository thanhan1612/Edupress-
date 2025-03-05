import { createContext,useState,useEffect } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    useEffect(() => {
        const storedUser = sessionStorage.getItem("user")
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    },[]);
    const login =(userName) => {
        setUser(userName);
        localStorage.setItem("user",JSON.stringify(userName));
    }
    const logout = ( ) => {
        setUser(null);
        localStorage.removeItem("user");
    }
    return (
        <AuthContext.Provider value = {{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
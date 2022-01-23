import React, {useState, createContext} from "react";

export type AuthUser = {
    name: string
    email: string
}

//nb
type UserContextType = {
    user:AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

//initial value is null 
// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType)

//typically the user context is for managing the authenticated state of the user
export const UserContextProvider = ({children}: UserContextProviderProps)=> {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
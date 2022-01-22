import { useState } from "react"
//This process allows us to access name and email
//without a check.
type AuthUser = { 
    name: string,
    email: string
}

export const UserTypeAssertion = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Temisan',
            email: 'tems@gmail.com',
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name} and email is {user.email}</div>
        </div>
    )
}


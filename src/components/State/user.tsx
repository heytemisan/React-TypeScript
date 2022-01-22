import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLoggin =() => {
        setUser({
            name: 'Temi',
            email: 'temi@gmail.com'
        });
    }

    const handleLogout=() => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLoggin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user?.name}</div>
            <div>User is {user?.email}</div>
        </div>
    )
}
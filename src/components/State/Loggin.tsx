import { useState } from "react"

export const LoggedIn = () => {

    const [isLoggin, setisLoggin] = useState(false);
    
    const handleLogin= () => {
        setisLoggin(true);
    }
    const handleLogout =()=> {
        setisLoggin(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggin ? 'logged in' : 'not logged in'}</div>
        </div>
    )
}
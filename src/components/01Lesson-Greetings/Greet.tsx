type GreetProps = {
    name: string,
    numberCount: number,
    isLoggedIn: boolean,
}

export const Greet = ({name, numberCount, isLoggedIn}:GreetProps) => {
    return (
        <div>
            <h2>{
                isLoggedIn ? 
                `Welcome to ${name}, you have ${numberCount} unread messages` : 'Sign in'
                }
            </h2>
        </div>
    )
}
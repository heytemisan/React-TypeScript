type GreetProps = {
    name: string,
    number: number,
}

export const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2>Welcome to {props.name}, you have {props.number} unread messages</h2>
        </div>
    )
}
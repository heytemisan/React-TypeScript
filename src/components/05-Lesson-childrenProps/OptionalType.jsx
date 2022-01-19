type DataProps = {
        name: string,
        messageCount?: number,
        isLoggedIn: boolean,
}

export const OptionalType = (props:DataProps) => {
    return (
        <div>
            {props.isLoggedIn ? 
                `${props.name} as ${props.messageCount} counts left`:
                ` No data available`
                }
        </div>
    )
}
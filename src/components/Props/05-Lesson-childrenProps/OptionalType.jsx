type DataProps = {
        name: string,
        messageCount?: number,
        isLoggedIn: boolean,
}

export const OptionalType = (props:DataProps) => {
    const {messageCount = 10} = props
    return (
        <div>
            {props.isLoggedIn ? 
                `${props.name} as ${messageCount} counts left`:
                ` No data available`
                }
        </div>
    )
}
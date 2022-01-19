type grammyProps = {
    children:React.ReactNode
}

export const Grammy = (props:grammyProps) => {
    return (
        <h2>
            {props.children}
        </h2>
    )
}
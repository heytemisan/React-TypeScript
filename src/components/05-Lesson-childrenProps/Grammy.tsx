type grammyProps = {
    children:string
}

export const Grammy = (props:grammyProps) => {
    return (
        <h2>
            {props.children}
        </h2>
    )
}
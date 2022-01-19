type grammyProps = {
    children:React.ReactNode //very important
}

export const Grammy = (props:grammyProps) => {
    return (
        <p>
            {props.children}
        </p>
    )
}
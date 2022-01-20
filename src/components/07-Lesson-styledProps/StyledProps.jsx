type ContainerProps = {
    //value can be a number or a string
    styles:React.CSSProperties
}

export const StyledProps =(props: ContainerProps)=> {
    return (
        <div style={props.styles}>
            Text context gord here
        </div>
    )
}
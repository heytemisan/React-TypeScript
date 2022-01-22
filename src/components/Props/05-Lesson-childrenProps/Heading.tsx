type headingProps = {
    children:string
}
//passing react components as children props
export const Heading =(props: headingProps) => {
    return (
        <h1>
            {props.children} 
        </h1>
        
    )
}
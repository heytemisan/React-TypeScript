//input value usually requires two props -
//input value and event handler
type InputProps = {
    value: string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void
     //usually input doesn not require a parameter
}

export const Input =(props: InputProps)=> {
    return (
        <input type='text' value={props.value} onChange={props.handleChange}/>
    )
}
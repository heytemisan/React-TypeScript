//input value usually requires two props -
//input value and onChange handler
type InputProps = {
    value: string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void
     //usually input doesn not require a parameter
}

export const Input =(props: InputProps)=> {
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=> {
        console.log(event);
        
    }
    return (
        <input type='text' value={props.value} onChange={handleInputChange}/>
    )
}
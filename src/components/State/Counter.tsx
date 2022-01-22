import { useReducer } from "react";

const initialState = {count: 0}

//created reducer function for updating the state
//accepting state, action as parameter;
//nb. payload is a number/string

type CounterState = {
    count:number
}

type CounterAction = {
    type: string
    payload:number
}

function reducer(state: CounterState, action: CounterAction) {
    //action type update count value 
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count:{state.count}
            <button onClick={()=> dispatch({type: 'increment', payload:10})}>increment 10</button>
            <button onClick={()=> dispatch({type: 'decrement', payload:10})}>decrement 10</button>
        </>
    )
}
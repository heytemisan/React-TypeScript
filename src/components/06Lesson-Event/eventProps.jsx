import React from "react";

type buttonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    //usually button doesn not require a parameter
    //or value
};

export const Button = (props: buttonProps) => {
    return <button onClick={(event) => props.handleClick(e, 1)}>Click</button>;
};

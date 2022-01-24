import React from 'react';
import { Greet } from '../Props/01Lesson-Greetings/Greet';

export const CustomComponent = (props:React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            {props.numberCount}
        </div>
    )
};

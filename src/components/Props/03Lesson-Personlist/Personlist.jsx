import { Name } from './Person.types';

type ListProps = {
    names:Name[]
}

export const PersonList =(props: ListProps)=> {
    return (
        <div>
            {props.names.map((name) => {
                return (
                <h2 key={name.firstName}>
                    {name.firstName} {name.lastName} {name.age}
                </h2>
                )
            })}     
        </div>
    )
}
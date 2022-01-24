export type ProfileProps = {
    name: string
}

export type ageProps = {
    age: number
}

export const Profile =({name}:ProfileProps, {age}: ageProps) => {
    return (
        <div>
            Private Profile Component name is {name}{age}
        </div>
    )
}
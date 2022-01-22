//type is always an object
export type Name = {
    names:{
        firstName: String,
        lastName: String,
        age: Number
    }[]
}


export type ListProps = {
    names : Name
}
// type ListProps= {
//     items: string[] | number[]
//     onClick: (value: string | number) => void
// }

//generics ~ are parameters style type

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List =<T extends {id: number}>({items, onClick}: ListProps<T>) => {
    return(
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <button key={item.id} onClick={() => onClick(item)}>
                        {item}
                    </button>
                )
            })}
        </div>
    )
}
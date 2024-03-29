type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

const Generics = <T extends { id: number, name:string }>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map(item => {
                return (
                    <div key={item.id} onClick={() => onClick(item)} >
                        {item.id}{" "}{item.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Generics
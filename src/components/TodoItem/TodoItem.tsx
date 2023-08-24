import React, { useState } from "react"

import "./TodoItem.css"

type ItemProps = {
    item: {text: string, isChecked: boolean};
    key: number
}

export const TodoItem: React.FC<ItemProps> = ({ item }) => {
    console.log(item)
    const [ isChecked, setIsChecked ] = useState<boolean>(item.isChecked)

    return (
      <div className="item">
        <input type="checkbox" className="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
        <span className="todoText">{item.text}</span>
      </div>
    )
}
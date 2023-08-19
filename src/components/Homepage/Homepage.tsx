import React, { useRef, useState } from "react"

const Homepage = () => {
  // const [ newTodo, setNewTodo ] = useState<boolean>(false)
  const [ todoList, setTodoList ] = useState<string[]>([])
  const todoRef = useRef(null)


    const saveTodo = () => {
      let list = todoList
      console.log((todoRef.current as any).value)
      list.push((todoRef.current as any).value)
      setTodoList(list)
      console.log(todoList)
    }

    return (
    <div className="App">
      <h1>
        TODO List
      </h1>
      <input type="text" placeholder="Write a new Todo" ref={todoRef}></input>
      <button onClick={() => saveTodo()} type="button">Save</button>
      {todoList ? todoList.map((todo) => <p key={todo}>{todo}</p>) : null}
    </div>
    )
}
export default Homepage
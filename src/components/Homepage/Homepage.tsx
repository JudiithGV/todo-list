import React, { useRef, useState } from "react";

import "./Homepage.css";

const Homepage = () => {
  const [ todoList, setTodoList ] = useState<string[]>([])
  const todoRef = useRef<any>(null)

  const saveTodo = (event: any) => {
    event.preventDefault();

    let list = [...todoList]
    const newTodo = todoRef.current.value
    todoRef.current.value = ""
    list.push(newTodo)
    setTodoList(list);
  }

  return (
  <div className="App">
    <h1>
      TODO List
    </h1>
    <form onSubmit={saveTodo}>
      <input type="text" placeholder="Write a new Todo" ref={todoRef} className="inputTodo"></input>
      <button type="submit" className="buttonSubmit">Save</button>
    </form>
    <div className="todoList">
      {todoList ? todoList.map((todo, i) => 
        <div key={i} className="item">
          <input type="checkbox" className="checkbox"/>
          <span className="todoText">{todo}</span>
        </div>
        ) : null}
    </div>
  </div>
  )
}
export default Homepage
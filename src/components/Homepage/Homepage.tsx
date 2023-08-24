import React, { useRef, useState } from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import "./Homepage.css";

export const Homepage = () => {
  const [ todoList, setTodoList ] = useState<any>([])
  const todoRef = useRef<any>(null)

  const saveTodo = (event: any) => {
    event.preventDefault();

    let list = [...todoList]
    const newTodo = todoRef.current.value
    todoRef.current.value = ""
    list.push({text: newTodo, isChecked: false})
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
      {todoList ? todoList.map((item: any, i:any) => 
        <TodoItem key={i} item={item} />
      ) : null}
    </div>
  </div>
  )
}
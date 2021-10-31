import React from 'react'
import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div>
            {filteredTodos.map((todo) => (<Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} text={todo.text}/>))}
        </div>
    )
}

export default TodoList
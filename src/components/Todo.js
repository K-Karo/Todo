import React from 'react'
import {BoxTodo, DeleteButton, CheckButton, P, N} from "./StyledComponents"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return(
                    {...item, completed: !item.completed}
                )
                }
            return item
        }))
    }

    return(
        <div>
            <BoxTodo>
                
                {todo.completed ? <N>{text}</N> : <P>{text}</P>}

                <DeleteButton onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrash} size='1x'></FontAwesomeIcon>
                </DeleteButton>

                <CheckButton onClick={completeHandler}>
                    <FontAwesomeIcon icon={faCheck} size='1x'></FontAwesomeIcon>
                </CheckButton>

            </BoxTodo>
        </div>
    )
}

export default Todo
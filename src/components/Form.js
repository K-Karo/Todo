import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BiRefresh} from "react-icons/bi"
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import {MainMenuBtn, InputTodo, Button, Select} from "./StyledComponents"

const Form = ({inputTextTodo, setInputTextTodo, todos, setTodos, status, setStatus}) => {

    const inputTextHandler = (e) => {
        setInputTextTodo(e.target.value);
    }
    const submitTodoHandler = (e) => {   
            e.preventDefault();
            setTodos([
            ...todos, {text: inputTextTodo, completed: false, id: Math.random()*1000}
            ]);
            setInputTextTodo("");         
        }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    const pass = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setTodos([
            ...todos, {text: inputTextTodo, completed: false, id: Math.random()*1000}
            ]);
            setInputTextTodo("");}
         }

    function refreshPage() {
        window.location.reload();
      }
    
    return(
            <form>
                    <MainMenuBtn onClick={ refreshPage }><BiRefresh Icon size={30}></BiRefresh></MainMenuBtn>
                    <InputTodo 
                        value={inputTextTodo} 
                        onChange={inputTextHandler}
                        onKeyPress={pass}>
                    </InputTodo> 
                    <Button 
                        onClick={submitTodoHandler}>
                        <FontAwesomeIcon icon={faPlusSquare} size='2x'></FontAwesomeIcon> 
                    </Button>
                    <div>   
                        <Select 
                            onChange={statusHandler}>
                                <option>All</option>
                                <option>Completed</option>
                                <option>Uncompleted</option>
                        </Select>
                    </div>
            </form>
    );     
}

export default Form;

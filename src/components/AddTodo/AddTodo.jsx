import { useRef } from "react";
import React from "react";
import './AddTodo.css'
const AddTodo = ({setTodoList}) =>{

    const inputRef = useRef(null);


    function handleAddTodo(){

        const textVal = inputRef.current.value.trim();
        if(textVal!=''){
        setTodoList((prevTodo)=>[...prevTodo,textVal]);
        inputRef.current.value=''
        }
    }


    return(<div className="add-todo">

        <h2>Todo List</h2>
        <div>
            <input className="todo-text" type="text" name="todoinput" ref={inputRef}></input>
            <input className="todo-Button" type="button" value="Add Todo" onClick={handleAddTodo}/>
        </div>

    </div>)

}

export default React.memo(AddTodo);
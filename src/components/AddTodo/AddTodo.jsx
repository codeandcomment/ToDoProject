import { useEffect, useRef, useState } from "react";

const AddTodo = ({setTodoList}) =>{

    const [todos,setTodo] = useState([]);
    const inputRef = useRef(null);

    useEffect(()=>{

        setTodoList(todos)

    },[todos,setTodoList])

    function handleAddTodo(){

        const textVal = inputRef.current.value.trim();

        setTodo((prevTodo)=>[...prevTodo,textVal]);
        inputRef.current.value=''
    }


    return(<div>

        <h2>Todo List</h2>
        <div>
            <input type="text" name="todoinput" ref={inputRef}></input>
            <input type="button" value="Add Todo" onClick={handleAddTodo}/>
        </div>

    </div>)

}

export default AddTodo;
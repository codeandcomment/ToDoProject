import { useRef } from "react";

const AddTodo = ({setTodoList}) =>{

    const inputRef = useRef(null);


    function handleAddTodo(){

        const textVal = inputRef.current.value.trim();
        setTodoList((prevTodo)=>[...prevTodo,textVal]);
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
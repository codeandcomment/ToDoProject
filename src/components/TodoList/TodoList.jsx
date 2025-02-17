 const TodoList = ({todoList,deleteTodo }) =>{
    console.log(todoList);

    return(<div>
            <h2>Lists</h2>

            <ul >
                {todoList && todoList.map((todo,index)=>(
                    <li  key={index}> {todo} <button onClick={()=>deleteTodo(index)}>X</button></li>
                ))}
            </ul>
        </div>)


}

export default TodoList;
 const TodoList = ({todoList}) =>{
    console.log(todoList);

    return(<div>
            <h2>Lists</h2>

            <ul >
                {todoList && todoList.map((todo,index)=>(
                    <li  key={index}> {todo} </li>
                ))}
            </ul>
        </div>)


}

export default TodoList;
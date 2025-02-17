import './TodoList.css' ;

 const TodoList = ({todoList,deleteTodo }) =>{
    console.log(todoList);

    return(<div className='todo-list-div'>
            <h2>Lists</h2>

            <ul className='todo-list-ul'>
            <ol type="1">
                {todoList && todoList.map((todo,index)=>(
                    <li className='todo-li'  key={index}> {todo} <button className='todo-delete' onClick={()=>deleteTodo(index)}>X</button></li>
                ))}
                </ol>
            </ul>
        </div>)


}

export default TodoList;
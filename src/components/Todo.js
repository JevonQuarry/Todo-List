import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null, value:''
    });
   
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({id:null, value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
                <button onClick={() => removeTodo(todo.id)} className='remove-button'>
                    Remove
                </button>
            
                <button onClick={() => setEdit({ id: todo.id, value: todo.text})} className='edit-button'>
                    Edit
                </button>
            
                <button key={todo.id} onClick={() => completeTodo(todo.id)} className='complete-button'>
                    Complete
                </button>
            </div>
        </div>   
    ));
}

export default Todo
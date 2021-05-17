import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.vaule : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() *100000),
            text:input
        });

        setInput('');
    };

    return (
       <form className= "todo-form" onSubmit={handleSubmit}>
           {props.edit ? (<>
           <input type='text' placeholder = 'Update' value={input} name='text' 
           className='todo-input edit' onChange={handleChange}ref={inputRef}/>
           <button className='todo-button edit'>Update</button></>) 
           : 
           (<>
           <input type='text' placeholder = 'New Task' value={input} name='text' 
           className='todo-input' onChange={handleChange}ref={inputRef}/>
           <button className='todo-button'>Add</button></>)}
           
       </form>
    )
}

export default TodoForm
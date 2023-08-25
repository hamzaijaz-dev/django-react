import React,{useState} from 'react';

export const TodoForm = ({addTodo}) =>{
    const [text,setText]=useState("");
    const  handleChange = e =>{
        setText(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={text} className='todo-input' placeholder='What is the task today?' onChange={handleChange}/>
        <button type="submit" className='todo-btn'>Add Task</button>
    </form>
)
}
import React from "react";
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
     <ul className="TodoList">
        {todos.map(({ id, text }) => (
            <li key={id} className='TodoList_item'>
                <p className="TodoList_text">{text}</p>
                <button className="TodoList_button" onClick={() => onDeleteTodo(id)}>Видалити</button>

            </li>
        ))}

     </ul>
);

export default TodoList;
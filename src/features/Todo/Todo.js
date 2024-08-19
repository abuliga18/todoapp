import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';

const Todo = ({todo, handleEdit, handleDelete, index}) => {

    return (
        <div className="todo">
            <p>{todo}</p>
            <div className="icons">
                <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={()=>handleEdit(index)} />
                <FontAwesomeIcon icon={faTrash} onClick={()=> handleDelete(index)} />
            </div>
        </div>
    )
}

export default Todo;
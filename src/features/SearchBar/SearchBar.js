import React, { useState, useEffect }  from "react";
import './SearchBar.css'

const SearchBar = ({onSubmit, todoValue}) => {

    const [todo, setTodo] = useState('');

    useEffect(() => {
        setTodo(todoValue);
    }, [todoValue]);


    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (todo.length > 0) {
            onSubmit(todo)
            setTodo('')
        }
    }

    return (
        <div className="bar">
            <input type="text" placeholder="Enter todo..." value={todo} onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        </div>
        
    )

}

export default SearchBar;
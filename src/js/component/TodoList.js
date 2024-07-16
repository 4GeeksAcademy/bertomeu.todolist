import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    return (
        <div className="container">
            <h1 className="text-center" style={{fontSize: "80px"}} >ToDo List</h1>
            <div className="border border-white border-5 rounded-pill p-3 bg-white fs-2">
                <input 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setTodos(todos.concat([input]));
                            setInput("");
                        }
                    }} 
                    placeholder="What needs to be done?" 
                />
            </div>
            {todos.map((item, index) => (
                <div key={index} className="border border-white border-5 mt-3 rounded-pill p-3 bg-white fs-3 d-flex justify-content-between align-items-center" >
                    {item}
                    <i className="fas fa-trash-alt" onClick={() => setTodos(todos.filter((_, i) => i !== index))}></i>
                </div>
            ))}
            <div className="mt-3 fs-3 text-center" >{todos.length} tasks</div>
        </div>
    );
}
export default TodoList
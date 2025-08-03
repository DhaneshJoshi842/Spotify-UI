import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    let [todo, setTodo] = useState([{ task: "", id: uuidv4(), isdone: false }]);
    let [newtaskTodo, setnewtaskTodo] = useState("");

    function updateTodo(event) {
        setnewtaskTodo(event.target.value);
    }

    function addtaskTodo() {
        setTodo([...todo, { task: newtaskTodo, id: uuidv4(), isdone: false }]);
        setnewtaskTodo(""); // Clear the input field after adding the task
    }

    function deleteTodo(id) {
        let copy = todo.filter((work) => work.id !== id);
        setTodo(copy);
    }

    function MarkallDone() {
        let newArr = todo.map((work) => {
            return {
                ...work,
                isdone: true
            }
        })
        setTodo(newArr);
    }

    function MarkasDoneOne(id) {
        let newArr = todo.map((work) => {
            if (work.id === id)
                return {
                    ...work,
                    isdone: true
                }
            else {
                return work;
            }
        })
        setTodo(newArr);
    }

    // Updated CSS styles
    const containerStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        background: "linear-gradient(to right, #6a1b9a, #9c27b0, #ab47bc)",
        borderRadius: "10px",
        width: "400px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    const inputStyle = {
        padding: "12px",
        width: "70%",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "15px",
        fontSize: "16px"
    };

    const buttonStyle = {
        padding: "12px 20px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
        transition: "background-color 0.3s",
        fontSize: "16px"
    };

    const listItemStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        marginBottom: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    };

    const deleteButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#dc3545"
    };

    const markDoneButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#ffc107"
    };

    const taskTextStyle = {
        flexGrow: 1,
        textAlign: "left",
        color: "black",
        fontSize: "16px"
    };

    return (
        <div style={containerStyle}>
            <input
                style={inputStyle}
                placeholder="Add your task here"
                value={newtaskTodo}
                onChange={updateTodo}
            />
            <br />
            <button style={buttonStyle} onClick={addtaskTodo}>ADD</button>
            <hr />
            <ul style={{ listStyle: "none", padding: 0 }}>
                {
                    todo.map((work) => {
                        if (work.task) {
                            return (
                                <li key={work.id} style={listItemStyle}>
                                    <span
                                        style={{
                                            ...taskTextStyle,
                                            textDecoration: work.isdone ? "line-through" : "none",
                                            color: work.isdone ? "#9c27b0" : "black" // Purple text when done
                                        }}
                                    >
                                        {work.task}
                                    </span>
                                    <button style={deleteButtonStyle} onClick={() => deleteTodo(work.id)}>Delete</button>
                                    <button style={markDoneButtonStyle} onClick={() => MarkasDoneOne(work.id)}>Mark As Done</button>
                                </li>
                            );
                        }
                    })
                }
            </ul>
            <button style={buttonStyle} onClick={MarkallDone}>Mark All As Done</button>
        </div>
    );
}

export default Todo;

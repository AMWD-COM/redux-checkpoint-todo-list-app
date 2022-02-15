import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import EditTodo from "./EditTodo";


const TodoItem = ({ id, title, completed }) => {

	const [edit, setEdit] = useState(false)

    const dispatch = useDispatch();

    const handleCompleteTodo = () => {
        dispatch(
            toggleComplete({
                id: id,
                completed: !completed,
            })
        );
    };

    const handleDeleteTodo = () => {
        dispatch(
            deleteTodo({
                id: id,
            })
        );
    };

    return (
        <li
            className={`list-group-item ${
                completed && "list-group-item-success"
            }`}
        >
            <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center">
                    <input
                        type="checkbox"
                        className="mr-3"
                        checked={completed}
                        onChange={handleCompleteTodo}
                    ></input>
                    {title}
                </span>

                <div
                    className="btn-group"
                    role="group"
                    aria-label=" Basic example"
                >
                    <button
                        className="btn btn-secondary"
                        onClick={handleDeleteTodo}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <button
                        type="button"
                        className="btn btn-info"
                        data-placement="left"
                        title="Edit"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => setEdit(true)}
                    >
                        ✏️
                    </button>

                    {edit ? (
                        <EditTodo
                            todo={{ id, title}}
                            hideEdit={() => setEdit(false)}
                        />
                    ) : null}

                </div>
            </div>
        </li>
    );
};

export default TodoItem;

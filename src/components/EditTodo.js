import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/todoSlice";

const EditTodo = ({ todo, hideEdit }) => {
    const [editText, setEditText] = useState("");
    console.log(editText);

    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTodo({ id: todo.id ,  editText}));
        hideEdit()
    };

    return (
        <div>
            <div
                className="modal show fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    display: "block",
                    backgroundColor: "rgba(0,0,0,0.2)",
                }}
            >
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Task
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={hideEdit}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setEditText(e.target.value)}
                                value={editText}
                                placeholder="Edit Todo . . ."
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={hideEdit}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className={`btn btn-primary ${!editText ? 'disabled':''}`}
                                onClick={handleEdit}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;

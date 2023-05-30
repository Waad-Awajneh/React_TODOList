import React, { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/TasksReducer/action";
function FormToAddTask({ rotate }) {
  const dispatch = useDispatch();

  const myRef = useRef({
    id: "",
    title: "",
    priority: "Normal",
    description: "",
    deadline: "",
    completed: false,
  });
  const handelChange = (e) => {
    myRef.current = { ...myRef.current, [e.target.name]: e.target.value };
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    let id = crypto.randomUUID();
    dispatch(addTask({ ...myRef.current, id: id }));
    e.target.reset();
  };
  return (
    <div className={`form ${rotate && "add"}`}>
      <h3>Add New Task</h3>
      <form onSubmit={handelSubmit}>
        <div className="form_data">
          <label htmlFor="Title"> Task Title </label>
          <input
            type="text"
            name="title"
            onChange={handelChange}
            id="Title"
            required
          />
        </div>

        <div className="form_data">
          <label htmlFor="Task-Priority"> Task Priority </label>
          <select
            name="priority"
            onChange={handelChange}
            defaultValue="Normal"
            id="Task-Priority"
          >
            <option value="Critical">Critical</option>
            <option value="Normal">Normal</option>
            <option value="Low-priority">Low priority</option>
          </select>
        </div>
        <div className="form_data">
          <label htmlFor="deadline"> DeadLine </label>
          <input
            type="date"
            onChange={handelChange}
            name="deadline"
            id="deadline"
            required
          />
        </div>
        <div className="form_data">
          <label htmlFor="desc"> Task Description </label>
          <textarea
            name="description"
            id="desc"
            onChange={handelChange}
            required
          />
        </div>
        <div className="form_data">
          <button className="input" type="submit" id="add">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(FormToAddTask);

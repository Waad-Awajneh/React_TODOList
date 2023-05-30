import React, { memo } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateTaskModal } from "../../alerts/updateModal";
import {
  deleteTask,
  doneState,
} from "../../redux/reducers/TasksReducer/action";

function Task({ userTask }) {
  console.log(userTask);
  const dispatch = useDispatch();

  return (
    <div className={`task  ${userTask.completed && "completeTask"}`}>
      <h4>{userTask.title}</h4>
      <p className="deadline">{userTask.deadline}</p>
      <p className="description">{userTask.description}</p>
      <h5 className="complete" onClick={() => dispatch(doneState(userTask))}>
        Complete
        <AiFillCheckCircle />
      </h5>
      <div className="state">
        <span className={` ${userTask.priority}`}>{userTask.priority}</span>
        <span> {userTask.completed ? "Completed" : "UnComplete"}</span>
      </div>

      <span
        className="icon trash"
        onClick={() => dispatch(deleteTask(userTask.id))}
      >
        <BsFillTrashFill />
      </span>
      <span
        className="icon edit"
        onClick={() => dispatch(updateTaskModal(userTask))}
      >
        <BsFillPenFill />
      </span>
    </div>
  );
}

export default memo(Task);

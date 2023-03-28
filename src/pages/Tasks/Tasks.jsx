import { useDispatch, useSelector } from "react-redux";
import FormToAddTask from "./FormToAddTask";
import "./style.css";
import Task from "./Task";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import {
  clearAllTasks,
  clearCompletedTasks,
} from "../../redux/reducers/TasksReducer/action";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Tasks() {
  const { allTasks } = useSelector((state) => state.TasksReducer);
  const [showDeleteList, setShowDeleteList] = useState(false);
  const [rotate, setRotate] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="all-component">
      <FormToAddTask rotate={rotate} />
      <div className="workspace">
        <div>
          <p>
            Welcome to <span id="color">Estarta Tasks Organizer</span>
            <br /> We are thrilled to have you on board, Enjoy.
          </p>
          <div className="all-task">
            {allTasks?.map((userTask) => (
              <Task userTask={userTask} />
            ))}
          </div>

          <AiOutlinePlusCircle
            className={`plus ${rotate && "rotate"}`}
            onClick={() => setRotate(!rotate)}
          />
        </div>
      </div>
      <span
        className="delete"
        onClick={() => setShowDeleteList(!showDeleteList)}
      >
        <BsFillTrashFill color="gray" size={30} className="deleteIcon" />
        <div className={`typeClear ${showDeleteList && "activeDelete"} `}>
          <p
            className="clearList all"
            onClick={() => dispatch(clearAllTasks())}
          >
            All Tasks
          </p>
          <p
            className="clearList"
            // id="compClear"
            onClick={() => dispatch(clearCompletedTasks())}
          >
            Completed Tasks
          </p>
        </div>
      </span>
    </div>
  );
}

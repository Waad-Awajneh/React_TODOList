import * as CONSTANTS from "./constants";
import deleteAlert from "../../../alerts/deleteAlert";
import AddedSuccessfullyAlert from "../../../alerts/AddedSuccessfullyAlert";

export const addTask = (task) => (dispatch) => {
  dispatch({ type: CONSTANTS.ADD_TASK, payload: task });
  AddedSuccessfullyAlert();
};

export const doneState = (task) => (dispatch) => {
  const completedTask = { ...task, completed: true };
  dispatch({ type: CONSTANTS.TASK_COMPLETED, payload: completedTask });
};

export const deleteTask = (id) => async (dispatch) => {
  const isConfirmed = await deleteAlert();
  console.log(isConfirmed);
  isConfirmed && dispatch({ type: CONSTANTS.DELETE_TASK, payload: id });
};

export const saveEdit = (userTask) => (dispatch) => {
  let title = document.getElementById("swal-input1").value;
  let deadline = document.getElementById("swal-input2").value;
  let description = document.getElementById("swal-input3").value;
  let priority = document.getElementById("swal-input4").value;

  userTask.title = title;
  userTask.deadline = deadline;
  userTask.description = description;
  userTask.priority = priority;

  dispatch({ type: CONSTANTS.UPDATE_TASK, payload: userTask });
};
export const clearAllTasks = () => (dispatch) => {
  dispatch({ type: CONSTANTS.CLEAR_ALL_TASKS });
};
export const clearCompletedTasks = () => (dispatch) => {
  dispatch({ type: CONSTANTS.CLEAR_COMPLETED_TASKS });
};

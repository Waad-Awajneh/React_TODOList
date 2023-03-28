import * as CONSTANTS from "./constants";

const initialState = {
  allTasks: [],
};

export default function TasksReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.ADD_TASK:
      return { ...state, allTasks: [...state.allTasks, action.payload] };

    case CONSTANTS.TASK_COMPLETED:
      const newArrayOfTasks = state.allTasks?.map((task) =>
        task.id !== action.payload.id ? task : action.payload
      );
      return { ...state, allTasks: newArrayOfTasks };

    case CONSTANTS.DELETE_TASK:
      return {
        ...state,

        allTasks: state.allTasks?.filter((task) => {
          return task.id !== action.payload;
        }),
      };
    case CONSTANTS.UPDATE_TASK:
      return {
        ...state,
        allTasks: state.allTasks?.map((task) =>
          task.id !== action.payload.id ? task : action.payload
        ),
      };
    case CONSTANTS.CLEAR_ALL_TASKS:
      return {
        ...state,
        allTasks: [],
      };
    case CONSTANTS.CLEAR_COMPLETED_TASKS:
      console.log(state.allTasks);
      return {
        ...state,
        allTasks: state.allTasks?.filter((task) => {
          return task.completed !== true;
        }),
      };

    default:
      return state;
  }
}

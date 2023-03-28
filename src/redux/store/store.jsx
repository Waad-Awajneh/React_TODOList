import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import ThemeReducer from "./../reducers/ThemeReducer/reducer";
import TasksReducer from "./../reducers/TasksReducer/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({ ThemeReducer, TasksReducer });
const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;

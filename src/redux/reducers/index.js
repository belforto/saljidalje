import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import apiReducer from "./apiReducer";
import articleReducer from "./articleReducer";
export default combineReducers({ todos, visibilityFilter,apiReducer ,articleReducer});

import { combineReducers } from "redux";
import addListReducer from "./addList";
import listsReducer from "./list";
import tasksReducer from "./tasks";


let rootReducer = combineReducers({
    addListReducer,
    listsReducer,
    tasksReducer
})
export default rootReducer
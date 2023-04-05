import { combineReducers, legacy_createStore as createStore } from "redux";
import { courses } from "../store/reducers/courseReducer";
const reducer = combineReducers({
  courses,
});

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>
export default store;

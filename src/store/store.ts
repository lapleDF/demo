import { combineReducers, compose, legacy_createStore as createStore } from "redux";
import { courses } from "../store/reducers/courseReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  courses,
});

const composeEnhancers = (process.env.REACT_APP_NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>
export default store;

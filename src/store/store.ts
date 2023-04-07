import { postReducer } from "./reducers/postReducer";
import { courseReducer } from "./reducers/courseReducer";
import { PayloadAction } from "./../Type/PayloadAction";
import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const sagaMiddleWare = createSagaMiddleware();
const reducer = combineReducers({
  courses: courseReducer,
  posts: postReducer,
});

const composeEnhancers =
  (process.env.REACT_APP_NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export const action = (type: PayloadAction) => store.dispatch(type);
export default store;

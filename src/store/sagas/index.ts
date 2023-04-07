import { all } from "redux-saga/effects";
import courseSaga from "./courseSaga";
import postSaga from "./postSaga";

export default function* rootSaga() {
  yield all([courseSaga(), postSaga()]);
}

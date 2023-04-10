import {takeEvery } from "redux-saga/effects";
import { PayloadAction } from "../../Type/PayloadAction";
import { courseActionType } from "../../constants/courseAction.constant";

export function* log(action: PayloadAction) {
  yield console.log("fetch courses: ", action);
}

export default function* courseSaga() {
  yield takeEvery(courseActionType.ADD_NEW_COURSE, log);
}

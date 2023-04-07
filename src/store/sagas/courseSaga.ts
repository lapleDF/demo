import { all, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "../../Type/PayloadAction";
import { courseActionType } from "../../constants/courseAction.constant";
import { getPost } from "../../api/PostAPIs";
import * as httpRequest from "../../api/httpRequest";

export function* log(action: PayloadAction) {
  yield console.log("fetch courses: ", action);
  // const response = httpRequest.getHttpRequest("posts");
  // console.log("DATA==>", response.then(res=>console.log(res)));
}

export default function* courseSaga() {
  yield takeEvery(courseActionType.ADD_NEW_COURSE, log);
}

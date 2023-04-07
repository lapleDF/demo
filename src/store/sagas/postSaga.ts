import { all, call, put, takeEvery } from "redux-saga/effects";
import { postAction } from "../../constants/postAction.constant";
import { PayloadAction } from "../../Type/PayloadAction";
import * as httpRequest from "../../api/httpRequest";

function* fetchPost(action: PayloadAction): any {
  const apiCall = async () => {
    return await httpRequest.getHttpRequest("posts");
  };
  try {
    const response = yield call(apiCall);
    yield put({ type: postAction.GET_SUCCESS, payload: response });
  } catch (error) {
    console.log(error);
  }
}

export default function* postSaga() {
  yield takeEvery(postAction.GET, fetchPost);
}

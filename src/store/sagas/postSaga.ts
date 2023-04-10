import { call, put, takeEvery } from "redux-saga/effects";
import { postAction } from "../../constants/postAction.constant";
import { PayloadAction } from "../../Type/PayloadAction";
import * as httpRequest from "../../api/httpRequest";
import { getPost } from "../../api/PostAPIs";

function* fetchPost(action: PayloadAction): any {
  const apiCall = async () => {
    return await getPost();
  };
  try {
    yield put({ type: postAction.SET_IS_LOADING });
    const response = yield call(apiCall);
    yield put({ type: postAction.GET_POST, payload: response });
    yield put({ type: postAction.SET_IS_SUCCESS });
  } catch (error) {
    yield put({ type: postAction.SET_IS_ERROR });
    console.log(error);
  }
}

export default function* postSaga() {
  yield takeEvery(postAction.GET, fetchPost);
}

import { PayloadAction } from "../../Type/PayloadAction";
import { PostListType, initalPostListType } from "../../Type/PostListType";
import { postAction } from "../../constants/postAction.constant";

export const postReducer = (
  state: PostListType = initalPostListType,
  action: PayloadAction
) => {
  switch (action.type) {
    case postAction.GET_SUCCESS:
      return { ...state, postList: action.payload };
    case postAction.REMOVE:
      return {
        ...state,
        postList: state.postList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

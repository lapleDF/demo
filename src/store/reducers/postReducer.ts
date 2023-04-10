import { action } from "./../store";
import { PayloadAction } from "../../Type/PayloadAction";
import { PostItemType } from "../../Type/PostItemType";
import { PostListType, initalPostListType } from "../../Type/PostListType";
import { postAction } from "../../constants/postAction.constant";

export const postReducer = (
  state: PostListType = initalPostListType,
  action: PayloadAction
) => {
  switch (action.type) {
    case postAction.GET_POST:
      return { ...state, postList: action.payload };
    case postAction.SET_IS_LOADING:
      return { ...state, callingStatus: "isLoading" };
    case postAction.SET_IS_ERROR:
      return { ...state, callingStatus: "isError" };
    case postAction.SET_IS_SUCCESS:
      return { ...state, callingStatus: "isSuccess" };
    case postAction.REMOVE:
      return {
        ...state,
        postList: state.postList.filter((item) => item.id !== action.payload),
      };
    case postAction.EDIT_POST:
      return {
        ...state,
        postList: state.postList.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return {
            ...item,
            ...action.payload,
          };
        }),
      };
    default:
      return state;
  }
};

import { courseActionType } from "./../../constants/courseAction.constant";
import { CourseListType, initialStateCourse } from "../../Type/CourseListType";
import { PayloadAction } from "../../Type/PayloadAction";

export const courses = (
  state: CourseListType = initialStateCourse,
  action: PayloadAction
) => {
  switch (action.type) {
    case courseActionType.SET_COURSE:
      return {
        ...state,
        courseList: action.payload,
      };
    case courseActionType.REMOVE_COURSE:
      return {
        ...state,
        courseList: state.courseList.filter(
          (item) => item.id !== action.payload
        ),
      };
    case courseActionType.ADD_NEW_COURSE:
      if (
        state.courseList.filter((item) => item.title === action.payload?.title)
          .length > 0
      ) {
        alert('Course existed!')
        return state;
      }
      return {
        ...state,
        courseList: [...state.courseList, action.payload],
      };
    default:
      return state;
  }
};

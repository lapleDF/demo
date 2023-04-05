import { CourseListType, initialStateCourse } from "../../Type/CourseListType";
import { PayloadAction } from "../../Type/PayloadAction";

export const courses = (
  state: CourseListType = initialStateCourse,
  action: PayloadAction
) => {
  switch (action.type) {
    case "SET_COURSE":
      return {
        ...state,
        courseList: action.payload,
      };
    case "REMOVE_COURSE":
      return {
        ...state,
        courseList: state.courseList.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "ADD_NEW_COURSE":
      return {
        ...state,
        courseList: [...state.courseList, action.payload],
      };
    default:
      return state;
  }
};

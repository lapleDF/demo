import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import imageCourse from "../../assets/images/developer.svg";
import uuid from "react-uuid";
export interface CourseItemStateType {
  id: string;
  title: string;
  image: string;
  status: "active" | "deactive";
}
export const initalCourseItem: CourseItemStateType = {
  id: uuid(),
  title: "DF learning course",
  image: imageCourse,
  status: "active",
};

export const initialStateCourse: Array<CourseItemStateType> = [];
export const courseSlice = createSlice({
  name: "course",
  initialState: initialStateCourse,
  reducers: {
    setCourse: (state, action: PayloadAction<CourseItemStateType[]>) => {
      return action.payload;
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    addNewCourse: (state, action: PayloadAction<CourseItemStateType>) => {
      state.push(action.payload);
    },
  },
});

export const { setCourse, removeCourse, addNewCourse } = courseSlice.actions;

import { CourseItemType } from "./CourseItem";

interface CourseListType {
  courseList: CourseItemType[];
  currentPage: number;
  prevPage: number;
  nextPage: number;
  totalPage: number;
}

export const initialStateCourse: CourseListType = {
  courseList: [],
  currentPage: 1,
  prevPage: 0,
  nextPage: 0,
  totalPage: 1,
};

export { type CourseListType };

import uuid from "react-uuid";
import imageCourse from "../assets/images/developer.svg";
interface CourseItemType {
  id: string;
  title: string;
  image: string;
  status: "active" | "deactive";
}

export const initalCourseItem: CourseItemType = {
  id: uuid(),
  title: "DF learning course",
  image: imageCourse,
  status: "active",
};

export { type CourseItemType };

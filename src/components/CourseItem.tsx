import React from 'react'
import { useAppDispatch } from '../app/store';
import { initalCourseItem, removeCourse } from '../features/courses/courseSlice';
import { CourseItemStateType } from '../features/courses/courseSlice';

interface Props {
  data: CourseItemStateType
}
const CourseItem: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeCourse(data.id))
  }
  return (
    <div className='course-item'>
      <p className="course-item--title">{data.title}</p>
      <img className='course-item--image' src={data.image} alt={data.title} />
      <button className='course-item--btn' onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default CourseItem
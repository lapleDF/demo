import React from 'react'
import store from '../store/store';
import { CourseItemType } from '../Type/CourseItem';

interface Props {
  data: CourseItemType
}
const CourseItem: React.FC<Props> = ({ data }) => {
  const handleDelete = () => {
    store.dispatch({ type: 'REMOVE_COURSE', payload: data.id })
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
import React from 'react'
import { AddNewCourse } from './AddNewCourse';
import CourseItem from './CourseItem'
import store, { RootState } from '../store/store';
import { CourseListType } from '../Type/CourseListType';
import { useSelector } from 'react-redux';

const Course = () => {
  const courses: CourseListType = useSelector((state: RootState) => state.courses);
  const handleDeleteAll = () => {
    store.dispatch({ type: 'SET_COURSE', payload: [] })
  }

  return (
    <div className='app'>
      <div className='courses'>
        {courses?.courseList.length !== 0 ? (<button className='btn__delete-all' onClick={handleDeleteAll} >Delete all</button>) : null}
        {
          courses?.courseList.map((item) => {
            return <CourseItem data={item} key={item.id} />
          })
        }
        <AddNewCourse />
      </div>
    </div>
  )
}

export default Course
import React from 'react'
import { useSelector } from 'react-redux';
import { rootState } from '../app/store';
import { AddNewCourse } from './AddNewCourse';
import CourseItem from './CourseItem'

const Course = () => {
  const courses = useSelector((state: rootState) => state)
  console.log('CCC', courses);
  return (
    <div className='courses'>
      {
        courses.map((item) => {
          return <CourseItem data={item} key={item.id} />
        })
      }
      <AddNewCourse />
    </div>
  )
}

export default Course
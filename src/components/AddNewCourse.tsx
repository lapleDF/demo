import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'
import { rootState, useAppDispatch } from '../app/store'
import { setCourse, addNewCourse } from '../features/courses/courseSlice'
import { CourseItemStateType, initalCourseItem } from '../features/courses/courseSlice'
export const AddNewCourse = () => {
  const dispatch = useAppDispatch();
  const refInput = useRef<HTMLInputElement>(null)
  const [formValues, setFormValues] = useState<CourseItemStateType>(initalCourseItem)

  useEffect(() => {
    refInput.current?.focus()
  }, [])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setFormValues({ ...formValues, 'id': uuid() })
    dispatch(addNewCourse(formValues))
    e.preventDefault()
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, 'title': event.target.value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input ref={refInput} type="text" value={formValues.title} onChange={handleChange} />
      </label>
      <input type="submit" value="Add new" />
    </form>
  )
}

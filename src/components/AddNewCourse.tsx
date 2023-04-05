import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid'
import store from '../store/store'
import { CourseItemType, initalCourseItem } from '../Type/CourseItem'
export const AddNewCourse = () => {
  const refInput = useRef<HTMLInputElement>(null)
  const [formValues, setFormValues] = useState<CourseItemType>(initalCourseItem)

  useEffect(() => {
    refInput.current?.focus()
  }, [])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setFormValues({ ...formValues, 'id': uuid() })
    store.dispatch({ type: 'ADD_NEW_COURSE', payload: formValues })
    e.preventDefault()
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, 'title': event.target.value })
  }
  return (
    <form onSubmit={handleSubmit} className='form-add'>
      <label className='form-add--label'>
        Title:
        <input className='form-add--input' ref={refInput} type="text" value={formValues.title} onChange={handleChange} />
      </label>
      <input className='form-add--submit' type="submit" value="Add new" />
    </form>
  )
}

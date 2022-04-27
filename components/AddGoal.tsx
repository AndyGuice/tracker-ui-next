import React, { useState } from 'react'
import { IGoal } from '../types'

type Props = {
  saveGoal: (e: React.FormEvent, formDate: IGoal) => void
}

const AddGoal: React.FC<Props> = ({ saveGoal }) => {
  const [formData, setFormData] = useState<IGoal>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveGoal(e, formData)}>
      <div>
        <div className='Form--field'>
          <label htmlFor='name'>Title</label>
          <input onChange={handleForm} type='text' id='title' />
        </div>
        {/* <div className='Form--field'>
          <label htmlFor='body'>Description</label>
          <input onChange={handleForm} type='text' id='body' />
        </div> */}
      </div>
      <button
        className='Form__button'
        disabled={formData === undefined ? true : false}
      >
        Add Goal
      </button>
    </form>
  )
}

export default AddGoal

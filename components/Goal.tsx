import * as React from 'react'
import { IGoal } from '../types'

type Props = {
  goal: IGoal
  deleteGoal: (id: number) => void
}

const Goal: React.FC<Props> = ({ goal, deleteGoal }) => {
  return (
    <div className='Card'>
      <div className='Card--body'>
        <h1 className='Card--body-title'>{goal.title}</h1>
        {/* <p className='Card--body-text'>{goal.description}</p> */}
      </div>
      <button className='Card__button' onClick={() => deleteGoal(goal.id)}>
        Delete
      </button>
    </div>
  )
}

export default Goal

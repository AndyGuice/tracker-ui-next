import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import AddGoal from '../components/AddGoal'
import Goal from '../components/Goal'
import { IGoal } from '../types'

const BASE_URL: string = 'https://jsonplaceholder.typicode.com/posts'

export default function IndexPage({
  goals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [goalList, setGoalList] = React.useState(goals)

  const addPost = async (e: React.FormEvent, formData: IGoal) => {
    e.preventDefault()
    const goal: IGoal = {
      id: Math.random(),
      title: formData.title,
      // description: formData.description,
    }
    setGoalList([goal, ...goalList])
  }

  const deleteGoal = async (id: number) => {
    const goals: IGoal[] = goalList.filter((goal: IGoal) => goal.id !== id)
    console.log(goals)
    setGoalList(goals)
  }

  if (!goalList) return <h1>Loading...</h1>

  return (
    <main className='container'>
      <h1>My goals</h1>
      <AddGoal saveGoal={addPost} />
      {goalList.map((goal: IGoal) => (
        <Goal key={goal.id} deleteGoal={deleteGoal} goal={goal} />
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL)
  const goals: IGoal[] = await res.json()

  return {
    props: {
      goals,
    },
  }
}

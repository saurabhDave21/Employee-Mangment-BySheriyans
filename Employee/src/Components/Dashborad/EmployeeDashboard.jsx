import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,setUser}) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-full overflow-hidden'>
        <Header data={data} setUser={setUser}/>
        <TaskListNumber data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 '>
        <div className='w-[40%] py-6 px-9 rounded-xl bg-slate-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[40%] py-6 px-9 rounded-xl bg-green-300'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='w-[40%] py-6 px-9 rounded-xl bg-yellow-500'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='w-[40%] py-6 px-9 rounded-xl bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
import React from 'react'

const CompleteTask = ({e}) => {
  return (
    <div className='flex-shrink-0  h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{e.category}</h3>
     <h4 className='text-sm'>{e.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{e.title}</h2>
    <p className='text-sm  mt-2'>{e.description}</p>
    <div className='mt-2'>
      <button className='w-full bg-green-500 rounded py-1 px-2'>Complete</button>
    </div>
 </div>
  )
}

export default CompleteTask
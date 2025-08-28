import React from 'react'

const AcceptTask = ({e}) => {
  return (   
     <div className='flex-shrink-0  h-full w-[300px] p-5 border-2 border-[#f1f1f1] rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{e.category}</h3>
     <h4 className='text-sm'>{e.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{e.title}</h2>
    <p className='text-sm  mt-2'>{e.description}</p>
    <div className='flex justify-between mt-4'>
      <button className='bg-green-500 py-2 px-2 text-sm rounded'>Mark as Completed</button>
      <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
    </div>
 </div>
  )
}

export default AcceptTask
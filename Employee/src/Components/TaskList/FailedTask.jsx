import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0  h-full w-[300px] p-5 border-2 border-[#f1f1f1] rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{e.category}</h3>
     <h4 className='text-sm'>{e.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{e.title}</h2>
    <p className='text-sm  mt-2'>{e.description}</p>
    <div className='mt-2'>
      <button className='W-full bg-red-600'>Failed</button>
    </div>
 </div>
  )
}

export default FailedTask
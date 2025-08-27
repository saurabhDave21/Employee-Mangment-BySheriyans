import React, { useEffect, useState } from 'react'

const TaskList = ({data}) => {
  const [taskdata, setTaskdata] = useState([])
  useEffect(() => {
    setTaskdata(data.tasks)
  }, [])
  
  return (
    <div id="tasklist" className='overflow-x-auto h-[55%] w-full py-5 mt-10 flex gap-5 flex-nowrap items-center justify-start'>
       {taskdata.map((e,key)=>{
        return(
        <div id={key} className='flex-shrink-0  h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
         <h4 className='text-sm'>{e.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{e.title}</h2>
        <p className='text-sm  mt-2'>{e.description}</p>
     </div>)  
       })}
       
    </div>
  )
}

export default TaskList
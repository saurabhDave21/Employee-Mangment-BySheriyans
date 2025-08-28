import React, { useEffect, useState } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  const [taskdata, setTaskdata] = useState([])
  useEffect(() => {
    setTaskdata(data.tasks)
  }, [taskdata])
  
 

  return (
    <div id="tasklist" className='overflow-x-auto h-[55%] w-full py-5 mt-10 flex gap-5 flex-nowrap items-center justify-start'>
       {taskdata.map((e,key)=>{
        if(e.active){
          return <AcceptTask key={key} e={e} />
        }
        if(e.completed){
          return <CompleteTask key={key} e={e}/>
        }
        if(e.failed){
          return <FailedTask key={key} e={e}/>
        }
        if(e.newTask){
          return <NewTask key={key} e={e}/>
        }
        
       })}
       
    </div>
  )
}

export default TaskList
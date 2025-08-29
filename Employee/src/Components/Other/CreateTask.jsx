import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'


const CreateTask = () => {
    const [userData, setuserData] = useContext(AuthContext)

    const [newtask, setNewtask] = useState({})
    const [TaskTitle, setTaskTitle] = useState('')
    const [Date, setDate] = useState('')
    const [Assign, setAssign] = useState('')
    const [Category, setCategory] = useState('')
    const [Description, setDescription] = useState('')

    const submitHadnler = (e) => {
      e.preventDefault();
    
      const newTaskObject = {
        title: TaskTitle,
        description: Description,
        date: Date,
        category: Category,
        active: false,
        newTask: true,
        completed: false,
        failed: false
      };
    
      // ✅ Update employees immutably
      const updatedEmployees = userData.map(emp => {
        if (emp.firstname === Assign) {
          return {
            ...emp,
            tasks: [...emp.tasks, newTaskObject]
          };
        }
        return emp;
      });
     
      
      // ✅ Update context (keeps admin too)
      setuserData(updatedEmployees);
      localStorage.setItem("employees",JSON.stringify(updatedEmployees))
      
      // Reset form
      setTaskTitle("");
      setDate("");
      setAssign("");
      setDescription("");
      setCategory("");
    };
      
        

return (
    <div className='p-5 bg-[#1C1C1C] mt-5 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between' onSubmit={submitHadnler}>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make  your design' value={TaskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" value={Date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To:</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' value={Assign} onChange={(e) => setAssign(e.target.value)} />
                </div>
                <div> <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design or Devlopment etc..' value={Category} onChange={(e) => setCategory(e.target.value)} /></div>
            </div>

            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea value={Description} onChange={(e) => setDescription(e.target.value)} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols={30} rows={10}></textarea>
                <button className='bg-emerald-400 py-3 hover:bg-transparent border-2 border-emerald-400  hover:border-emerald-600 px-5 text-sm mt-4 w-full '>Create Task</button>
            </div>

        </form>
    </div>
)
}

export default CreateTask
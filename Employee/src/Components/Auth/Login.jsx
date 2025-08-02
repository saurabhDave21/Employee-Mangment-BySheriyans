import React, { useState } from 'react'

const Login = () => {
   const [email, setemail] = useState('')
   const [password, setpassword] = useState('')

  const submitHandler=()=>{
    e.preventDefault();
    setemail("")
    setpassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email'
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }} />
                <input className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-4' type="password" placeholder='Enter Password' 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}/>
                <button className='mt-5 border-[1px] bg-emerald-600 rounded-full py-2 px-7 text-xl text-white outline-none  placeholder:text-white hover:text-white hover:bg-transparent hover:border-emerald-600'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
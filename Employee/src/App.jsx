import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashborad/EmployeeDashboard'
import AdminDashborad from './Components/Dashborad/AdminDashborad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [logined, setlogined] = useState(null)
  const [userData,setuserData]=useContext(AuthContext)
  

  useEffect(() => {
    const loggin = localStorage.getItem("isLogin",'')
    if(loggin){
      const userData = JSON.parse(loggin)
      setUser(userData.role)
      setlogined(userData.data)
    }
  }, [])
  
  
  
  const handleLogin = (email, password) => {
    const employee= userData.find((e)=>email==e.email && password==e.password)
    if (email=="admin@example.com"&&password=="123") {
      setUser('admin')
      localStorage.setItem("isLogin",JSON.stringify({role:"admin"}))
    }
    else if(userData && employee) {
      if(employee){
        setUser('employee')
        setlogined(employee)
        localStorage.setItem("isLogin",JSON.stringify({role:"employee",data:employee}))
      }
    }
    else {
      console.log("Invaild pass");
    }
  }

  
 
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' && <AdminDashborad />}
      {user === 'employee' && <EmployeeDashboard data={logined}/>}

    </>
  )
}

export default App
import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashborad/EmployeeDashboard'
import AdminDashborad from './Components/Dashborad/AdminDashborad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [logined, setlogined] = useState(null)
  const authData=useContext(AuthContext)
 

  useEffect(() => {
    const loggin = localStorage.getItem("isLogin",'')
    if(loggin){
      const userData = JSON.parse(loggin)
      setUser(userData.role)
      setlogined(userData.data)
    }
  }, [])
  
  
  
  const handleLogin = (email, password) => {
    const admin=authData.admin.find((e)=>email==e.email && password==e.password)
    const employee= authData.employees.find((e)=>email==e.email && password==e.password)
    if (authData && admin) {
      setUser('admin')
      setlogined(admin)
      localStorage.setItem("isLogin",JSON.stringify({role:"admin",data:admin}))
    }
    else if(authData && employee) {
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
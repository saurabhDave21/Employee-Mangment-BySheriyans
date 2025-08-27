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
 

  // useEffect(() => {
  //   if(authData){
  //     const isLogin=localStorage.getItem("isLogin")
  //     const
  //     if(isLogin){
  //       setUser(isLogin.role)
  //     }
  //   }
    
  // }, [authData])
  
  
  const handleLogin = (email, password) => {
    if (authData && authData.admin.find((e)=>email==e.email && password==e.password)) {
      setUser('admin')
      setlogined(admin)
      localStorage.setItem("isLogin",JSON.stringify({role:"admin"}))
    }
    else if (authData ) {
      const employee= authData.employees.find((e)=>email==e.email && password==e.password)
      if(employee){
        setUser('employee')
        setlogined(employee)
        localStorage.setItem("isLogin",JSON.stringify({role:"employee"}))
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
      {user === 'employee' && <EmployeeDashboard data={logined} setUser={setUser} />}

    </>
  )
}

export default App
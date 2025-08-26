import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashborad/EmployeeDashboard'
import AdminDashborad from './Components/Dashborad/AdminDashborad'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)
  
  return (
    <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashborad/> */}
    </>
  )
}

export default App
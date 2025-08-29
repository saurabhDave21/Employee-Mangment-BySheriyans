import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState(null) 

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setuserData(employees)
    }, [])
    
    useEffect(() => {
      if (userData) {
        setLocalStorage(userData.employees, userData.admin);
      }
    }, [userData]);
  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
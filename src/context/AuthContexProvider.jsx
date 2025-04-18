import React, { useState } from 'react'
import AuthContext from './AuthContext'

const AuthContexProvider = ({children}) => {
    const [btn , setBtn] = useState(false);
  return (
    <AuthContext.Provider value={{
        btn:btn,
        setBtn:setBtn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContexProvider;

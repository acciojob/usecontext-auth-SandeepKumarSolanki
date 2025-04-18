
import React, { useContext } from "react";
// import AuthContexProvider from "../context/AuthContexProvider";
import AuthContext from "../context/AuthContext";
const App = () => {

  let {btn , setBtn} = useContext(AuthContext);

  return (
    <div>
      {/* <AuthContexProvider> */}
        <h1>Click on the checkbox to get authenticated</h1>
      {btn ? (
        <p className="authText">You are now authenticated, you can proceed</p>
       
      ) : (
        <p>you are not authenticated</p>
      )}
      <input type="checkbox" name="checkbox" onClick={()=>setBtn(true)}/>
      <label htmlFor="checkbox">I'm not a robot</label>
      {/* </AuthContexProvider> */}
    </div>
  )
}

export default App

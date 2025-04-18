import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AuthContexProvider from "./context/AuthContexProvider";


ReactDOM.render(
    <AuthContexProvider>
        <App />
    </AuthContexProvider>


    , document.getElementById("root"));

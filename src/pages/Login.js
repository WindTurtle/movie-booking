import React from "react";
import LoginForm from "../components/Login/Login";
const Login = (props) => {
  return (
    <div>
      <LoginForm thongTin={props}/>
    </div>
  );
};

export default Login;

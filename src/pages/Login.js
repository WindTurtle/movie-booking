import React from "react";
import LoginForm from "../components/Login/Login";
import { userLogin } from "../config/setting";
const Login = (props) => {
  if (localStorage.getItem(userLogin)) {
    props.history.push("/");
  }
  return <LoginForm navigator={props} />;
};

export default Login;

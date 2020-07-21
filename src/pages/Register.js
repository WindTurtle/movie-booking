import React from "react";
import RegisterForm from "../components/Register/Register";
import { userLogin } from "../config/setting";
const Register = (props) => {
  if (localStorage.getItem(userLogin)) {
    props.history.push("/");
  }
  return <RegisterForm navigator={props} />;
};

export default Register;

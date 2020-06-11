import React from "react";
import RegisterForm from "../components/Register/Register";
const Register = (props) => {
  return (
    <div>
      <RegisterForm thongTin={props} />
    </div>
  );
};

export default Register;

import React from "react";
import UserInformation from "../components/UserInformation/UserInformation";
import { userLogin } from "../config/setting";
const Profile = (props) => {
  if (!localStorage.getItem(userLogin)) {
    props.history.push("/");
  }

  return <UserInformation />;
};

export default Profile;

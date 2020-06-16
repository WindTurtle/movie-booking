import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import DetailMovie from "./pages/DetailMovie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingTicket from "./pages/BookingTicket";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import MovieManagement from "./pages/MovieManagement";
import { LoginAdminTemplate } from "./templates/LoginAdminTemplate/LoginAdminTemplate";
import LoginAdmin from "./pages/LoginAdmin";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate
            exact
            path="/moviedetail/:maphim"
            Component={DetailMovie}
          />
          <HomeTemplate
            exact
            path="/booking/:maLichChieu"
            Component={BookingTicket}
          />
          <HomeTemplate exact path="/login" Component={Login} />
          <HomeTemplate exact path="/register" Component={Register} />
          <HomeTemplate exact path="/profile" Component={Profile} />
          <AdminTemplate exact path="/dashboard" Component={Dashboard} />
          <AdminTemplate
            exact
            path="/usermanagement"
            Component={UserManagement}
          />
          <AdminTemplate
            exact
            path="/moviemanagement"
            Component={MovieManagement}
          />
          <LoginAdminTemplate exact path="/loginadmin" Component={LoginAdmin} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

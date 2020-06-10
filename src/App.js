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
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

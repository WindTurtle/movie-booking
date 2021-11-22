import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./config/ScrollToTop";
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
// import { LoginAdminTemplate } from "./templates/LoginAdminTemplate/LoginAdminTemplate";
// import LoginAdmin from "./pages/LoginAdmin";
import AllMovie from "./pages/AllMovie";
import CreateShowTime from "./pages/CreateShowTime";
import ClusterCinema from "./pages/ClusterCinema";
import News from "./pages/News";
import DetailNews from "./pages/DetailNews";
import NewsManagement from "./pages/NewsManagement";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate exact path="/allmovie" Component={AllMovie} />
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
          <HomeTemplate exact path="/clustercinema" Component={ClusterCinema} />
          <HomeTemplate exact path="/news" Component={News} />
          <HomeTemplate
            exact
            path="/detailnews/:matintuc"
            Component={DetailNews}
          />
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
          <AdminTemplate
            exact
            path="/createshowtime"
            Component={CreateShowTime}
          />
          <AdminTemplate
            exact
            path="/newsmanagement"
            Component={NewsManagement}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

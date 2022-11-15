import React, { useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "./services/auth.service";
import EventBus from "./common/event-bus";

import Register from "./components/register";
import Welcome from "./components/Welcome";
import Login from './components/Login';
import Profile from './components/Profile';


const App = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user){
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });


  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  }

  return (
    <div>
          <Routes>
            <Route exact path={"/"} element={<Welcome />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
    </div>
  )
}

export default App;

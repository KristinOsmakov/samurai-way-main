import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {MyPosts} from "./components/profile/myPosts/MyPosts";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";


function App() {

    return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/news' component={News}/>
                  <Route path='/music' component={Music}/>
                  <Route path='/settings' component={Settings}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

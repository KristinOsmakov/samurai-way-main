import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {MyPosts} from "./components/profile/myPosts/MyPosts";
import {Profile} from "./components/profile/Profile";


function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;

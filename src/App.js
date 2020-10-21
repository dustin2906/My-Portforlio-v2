import React from 'react';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/titleMessage/titlemessage.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <MyNavbar />
    <MyCarousal />
    <TitleMessage />
    </div>
  );
}

export default App;
import React from "react";
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Profile from "./Components/Profile/Profile";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import {Routes, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


const App = () => {
  return (
    <div className ='app-wrapper'>
    <HeaderContainer />
    <NavBar />  
    <div className='content'>

<Routes>
<Route path="/profile" element={<Profile />}/>
<Route path="/profile/:Id" element={<Profile />}/>

<Route path="/Messages/*" element={<DialogsContainer />}/>
<Route path="/Users" element={<UsersContainer />}/>

<Route path="/Login" element={<Login />}/>



{/* <Route path="/profile" element={<Profile state={Props.state.ProfilePage} dispatch={Props.dispatch}/>}/>
<Route path="/Messages/:MessageId" element={<DialogsContainer state={Props.state.MessagePage} dispatch={Props.dispatch}/>}/>
<Route path="/Messages" element={<DialogsContainer state={Props.state.MessagePage} dispatch={Props.dispatch}/>}/> */}
</Routes>
    </div>
    </div>
      );
}
export default App;


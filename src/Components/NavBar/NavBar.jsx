import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar =()=>{
return<div className = {s.nav}>
    <div className = {s.item}>
    <NavLink className = { navData => navData.isActive ? s.active : s.item }  to ='/Profile'>Profile</NavLink> 
    </div>
    <div className = {s.item}>
    <NavLink className = { navData => navData.isActive ? s.active : s.item }  to ='/Users'>Users</NavLink> 
    </div>
    <div className = {s.item}>
    <NavLink className = { navData => navData.isActive ? s.active : s.item }  to ='/Messages'>Messages</NavLink>
    </div>
    <div className = {s.item}>
    <NavLink className = { navData => navData.isActive ? s.active : s.item }  to ='/News'>News</NavLink>
    </div>
    <div className = {s.item}>
    <NavLink className = { navData => navData.isActive ? s.active : s.item } to ='/Musik' >Musik</NavLink>
    </div>
</div>
}
export default NavBar
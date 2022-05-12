import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    if (props.isLogin) {
        return <header className={s.header}>
            <div className={s.Authorize}>
                <img src={props.avatar} />
                {props.login}
                <text onClick={props.Logout}> Logout</text>
               
               </div>
            <img src='https://e7.pngegg.com/pngimages/555/701/png-clipart-cartoon-penguin-cartoon-penguin-cartoon.png'></img>
        </header>
    }
    else { return (<header className={s.header}>
        <div className={s.Authorize}>
        <NavLink to='login'>Login</NavLink>
        </div>
        <img src='https://e7.pngegg.com/pngimages/555/701/png-clipart-cartoon-penguin-cartoon-penguin-cartoon.png'></img>
    </header>)}
}
export default Header;
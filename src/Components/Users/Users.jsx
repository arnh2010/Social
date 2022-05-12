import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import defultAvatar from '../../assets/Img/avatar.png';

const User = (props) => {
   return (
    <div>
      <div className={s.name}>{props.name}</div>
      <div>{props.uniqueUrlName}</div>
      <NavLink to ={'/Profile/'+ props.id}>
      {(props.photosLarge === null)
        ? <img className={s.img} src={defultAvatar}></img>
        : <img className={s.img} src={props.photosLarge} ></img>
      }
      </NavLink>
      
      <div>
        {(props.followed === false)
        //   Follow
          ? <button className={s.buttonFollow} disabled={props.isFollowingProgress.includes(props.id)} onClick={() => { 
            props.getFollow(props.id)}} >Follow</button>

          //   UnFollow
          : <button className={s.buttonUnFollow} disabled={props.isFollowingProgress.includes(props.id)}  onClick={() => { 
            props.getUnfollow(props.id)}} >Unfollow</button>
           
        }
      </div>
      <div>status: {props.status} </div>

      <br />
      </div>
)
}

export default User

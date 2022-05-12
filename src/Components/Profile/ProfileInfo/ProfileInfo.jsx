import React from 'react';
import s from './ProfileInfo.module.css'
import Loader from '../../../assets/Img/Loader.gif';
import defultAvatar from '../../../assets/Img/avatar.png';
import ProfileInfoStatus from './ProfileInfoStatus';

const ProfileInfo =(props)=>{
   if (props.userProfile !=  undefined){ 
  return(
    <div>
    {/* <div className={s.image}>    
    <img src='https://prostobzor.com/wp-content/gallery/faq-panorama/goty-panorama-4.jpg'></img>
   </div> */}
   <div className={s.DesriptionBlock}>

<div className={s.name}>
{props.userProfile.fullName}</div>
<div className={s.description} >
<ProfileInfoStatus status={props.userStatus} putUserStatus={props.putUserStatus} />
aboutMe: {props.userProfile.aboutMe}

</div>  



   {(props.userProfile.photos.large === null)
        ? <img className={s.avatar} src={defultAvatar}/>
        : <img className={s.avatar} src= {props.userProfile.photos.large} ></img>}
    <br />
    
    <div className={s.job}>
    Ищу работу:{props.userProfile.lookingForAJob}<br />
    {props.userProfile.lookingForAJobDescription}<br />
    </div>

    <div className={s.contacts}>
    vk:{props.userProfile.contacts.vk}<br />
    twitter: {props.userProfile.contacts.twitter}<br />
    facebook: {props.userProfile.contacts.facebook}<br />
    website: {props.userProfile.contacts.website}<br />
    instagram: {props.userProfile.contacts.instagram}<br />
    youtube: {props.userProfile.contacts.youtube}<br />
    github: {props.userProfile.contacts.github}<br />
    mainLink: {props.userProfile.contacts.mainLink}<br />
    </div>

    

   <br />
   <br />

    </div>
    </div>
    )}
       else {return(
       <div>
       <img className={s.loader} src={Loader} />
       </div>)
    }}
    export default ProfileInfo;
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem =(Props)=>{
return(
<div className ={s.dialog + ' ' + s.active}>
<NavLink to ={'/Messages/'+ Props.id}>{Props.name}</NavLink>
</div>)
}

export default DialogItem
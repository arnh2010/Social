import React from 'react';
import s from './../Dialogs.module.css'

const Message =(Props)=>{
    return(
    <div className ={s.dialog}>
    {Props.message}
    </div>
    )
    }

export default Message
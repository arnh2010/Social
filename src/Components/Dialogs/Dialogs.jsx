import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field,Form,Formik } from 'formik';

const Dialogs =(Props)=>{
    let dialogsElements =Props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let MessageElements =Props.Message.map(m=><Message message={m.message}/>)
   
return (
  <div className={s.dialogs}>
<div className={s.dialogItem}>
{dialogsElements}
</div>
<div className ={s.messeges}>
{MessageElements}
</div>
<div>
<SendMessage send={Props.onSend}/>
</div>
</div>
)
}

  const SendMessage =(props)=> (<Formik initialValues={{ massegeText: '' }} 
  onSubmit={values =>{
    props.send(values.massegeText)}}>
  
    {({ errors, touched }) => (
      <Form>
          <Field validate={1} placeholder="massege text" name="massegeText" type="span" />
        <button type="Send">Send</button>
        </Form>)}
  </Formik>)





export default Dialogs
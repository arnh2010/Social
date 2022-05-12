import React from 'react';
import { AddMessageAC, TextChangeCreator } from '../../Redux/MessageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state)=> {
  
  return ({dialogs: state.MessagePage.dialogs,  
    Message: state.MessagePage.messages 
   })
}

const mapDispatchToProps = (dispatch) =>  {
  return {
    onChangeText:(text)=>{
      let action = TextChangeCreator(text)
      dispatch(action)},
    onSend: (messageText)=>{ dispatch(AddMessageAC(messageText)) } }}
          
const DialogsContainer =connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer

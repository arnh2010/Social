import { AuthAPI,HeaderAPI } from "../API/API"

const SET_AUTH_USERS_DATA = 'SET-AUTH-USERS-DATA'
const SET_AVATAR = 'SET-AVATAR'

let InitialState = {
  email: null,
  id: null,
  login: null,
  isLogin: false,
  avatar: null,
}

let AuthReducer = (state = InitialState, action) => {

  switch (action.type) {
    case SET_AUTH_USERS_DATA: {
      // return { ...state, email:action.Data.email,id:action.Data.id,login: action.Data.login,isLogin:true }
      return { ...state, ...action.Data }
    }

    case SET_AVATAR: {
      return { ...state, avatar: action.AvatarURL }
    }

       default: return state
  }
}

export const SetAvatar = (AvatarURL) => {
  return { type: SET_AVATAR, AvatarURL: AvatarURL }
}

export const SetAuthUsersData = (email, id, login, isLogin) => {
  return { type: SET_AUTH_USERS_DATA, Data: { email: email, id: id, login: login, isLogin:isLogin } }
}

export const getAuth =()=>{
return(dispatch)=>{
AuthAPI.getAuth().then(Response => {
  if (Response){
  dispatch(SetAuthUsersData(Response.email, Response.id, Response.login,true))}})
  HeaderAPI.getUserProfile(2).then(Response => {
  dispatch(SetAvatar(Response.photos.small))})
}}

export const getLogin =(email,password,rememberMe,setStatus)=>{
return (dispatch)=>{
  AuthAPI.postLogin(email,password,rememberMe).then(Response => {
    if (Response.resultCode===0){
          dispatch( getAuth())
    }
   else{
     setStatus({error:Response.messages})
     }
})
}
}

export const Logout =()=>{
  return (dispatch)=>{    
    AuthAPI.deleteLogin().then(Response => {
      
      if (Response.resultCode===0){
    dispatch(SetAuthUsersData("", "","",false))
  }
})
}
}

export default AuthReducer
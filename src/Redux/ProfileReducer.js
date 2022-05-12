import { ProfileAPI } from "../API/API"

const ADD_POST = 'ADD-POST'
const POST_TEXT_CHANGE = 'POST-TEXT-CHANGE'

const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'


let InitialState = {
         posts:[
         {id:1,text:'133ere',likeCount:21 },
         {id:2,text:'233ere',likeCount:21 },
         {id:3,text:'333ere',likeCount:21 }
         ],
         NewPostText:[''],
         usersProfiles:[],
         Status:""
        }

let ProfileReduser =(state=InitialState,action)=>{
    
switch (action.type){
case ADD_POST: 
    {
let newPost= {id:9,text:state.NewPostText,likeCount:0 }
let StateCopy={...state}
StateCopy.posts=[...state.posts]

StateCopy.posts.push(newPost)
StateCopy.NewPostText=''
return StateCopy
    }
case POST_TEXT_CHANGE:
{
let StateCopy={...state}
StateCopy.NewPostText=action.text
return StateCopy
}

case SET_USER_PROFILE:
{return { ...state, usersProfiles:[action.userProfile]}}

case SET_USER_STATUS:
{return { ...state, Status:action.userStatus}}

default: return state
}}

export const AddPostCreator=()=> {
return  {type:ADD_POST}}

export const PostTextChangeCreator=(text)=> {
return  {type:POST_TEXT_CHANGE,text:text}}

export const setUserProfile = (userProfile) => {
        return { type: SET_USER_PROFILE,userProfile }
  }

export const setUserStatus = (userStatus) => {
    return { type: SET_USER_STATUS,userStatus}
}

export const getUserProfile =(userId)=>{
return (dispatch)=>{
    ProfileAPI.getUserProfile(userId).then(Response => { 
    dispatch(setUserProfile(Response)) })
}}

export const getUserStatus =(userId)=>{
    return (dispatch)=>{
        ProfileAPI.getUserStatus(userId).then(Response => { 
        dispatch(setUserStatus(Response)) })
    }}

export const putUserStatus =(status)=>{
    return (dispatch)=>{
        ProfileAPI.putUserStatus(status).then(Response => {
            debugger
            if (Response.data.resultCode===0){
             dispatch(setUserStatus(status))} })
         }}


export default ProfileReduser
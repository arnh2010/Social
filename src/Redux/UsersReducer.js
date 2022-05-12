import { HeaderAPI } from "../API/API"

const ADD_USERS = 'ADD-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET-USER'

const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

const SET_NUM_OF_PAGE= 'SET-NUM-OF-PAGE'

const TOGGLE_IS_FETCHING= 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRES= 'TOGGLE-IS-FOLLOWING-PROGRES'



let InitialState = {
  Users: [],
  pageSize:5,
  totalUserCount:0,
  currentPage:1,
  numOfPages:1,
  isFetching:false,
  isFollowingProgress:[]
}

let UsersReducer = (state = InitialState, action) => {

  switch (action.type) {
    case ADD_USERS: {
      let newPost = { id: 9, text: state.NewPostText, likeCount: 0 }
      let StateCopy = { ...state }
      StateCopy.posts = [...state.posts]
      StateCopy.posts.push(newPost)
      StateCopy.NewPostText = ''
      return StateCopy
    }

    case FOLLOW: {

      let StateCopy = {
        ...state,
        Users: state.Users.map(u => {
          if (u.id === action.UserId) {return { ...u, followed: true } }
          return u
        })
      }
      return StateCopy
    }

    case UNFOLLOW: {
      let StateCopy = {
        ...state,
        Users: state.Users.map(u => {
          if (u.id === action.UserId) { return { ...u, followed: false } }
          return u
        })
      }
      return StateCopy
    }

    case SET_USER: {
      // let StateCopy={...state}
      // StateCopy.Users=[...state.Users]
      // StateCopy.Users=[...state.Users,...action.Users]
      //   return StateCopy
      return { ...state, Users: action.Users }
    }

case SET_TOTAL_USER_COUNT: {
return { ...state, totalUserCount:action.UserCount }}

case SET_CURRENT_PAGE: {
    return {...state, currentPage:action.CurrentPage}
 }

 case SET_NUM_OF_PAGE: {
  return {...state, numOfPages:action.CurrentPage}
}

case TOGGLE_IS_FETCHING: {
  return {...state, isFetching:action.fetching}
}

case TOGGLE_IS_FOLLOWING_PROGRES: {
  
  console.log(state)

  if(state.isFollowingProgress.includes(action.UserID)) {
    
   return {
    ...state,isFollowingProgress:[...state.isFollowingProgress.filter(id=>{
    if (id != action.UserID){return id}})]
    // // isFollowingProgress: state.isFollowingProgress.map(u => {
    // //   if (u.id != action.UserId) { return { ...u } }
    // //   return {u }
    // })
  }
}
else{return {...state,isFollowingProgress:[...state.isFollowingProgress,action.UserID]}}
}
 
    default: return state
  }
}

export const AddUserAC = () => {
  return { type: ADD_USERS }
}

export const FollowAC = (UserId) => {
  return { type: FOLLOW, UserId: UserId }
}

export const UnfollowAC = (UserId) => {
  return { type: UNFOLLOW, UserId: UserId }
}

export const SetUserCreator = (Users) => {
  return { type: SET_USER, Users: Users }
}

export const SetTotalUserCountAC = (UserCount) => {
  return { type: SET_TOTAL_USER_COUNT, UserCount }
}

export const SetCurrentPageAC = (CurrentPage) => {
  return { type: SET_CURRENT_PAGE, CurrentPage }
}

export const SetNumOfPageAC = (CurrentPage) => {
  return { type: SET_NUM_OF_PAGE, CurrentPage }
}

export const ToggleIsFetchingAC = (fetching) => {
  return { type: TOGGLE_IS_FETCHING,fetching}
}

export const ToggleIsFollowingProgressAC = (UserID) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRES,UserID }
}

export const getUsersThunkCreator=(pageSize, currentPage)=>{

  return (dispatch)=>{
dispatch(ToggleIsFetchingAC(false))
HeaderAPI.getUsers(pageSize, currentPage)
.then(Response => {
dispatch(SetUserCreator(Response.items))
dispatch(SetTotalUserCountAC(Response.totalCount))
dispatch(ToggleIsFetchingAC(true))})
}}

export const getFollow=(UserID)=>{
return (dispatch)=>{
  dispatch(ToggleIsFollowingProgressAC(UserID))
          
HeaderAPI.postFollow(UserID).then(response=>{
if (response.resultCode===0){
  dispatch(FollowAC(UserID)) 
  dispatch(ToggleIsFollowingProgressAC(UserID))
}})
}}

export const getUnfollow=(UserID)=>{
  return (dispatch)=>{
    dispatch(ToggleIsFollowingProgressAC(UserID))
    HeaderAPI.deleteFollow(UserID).then(response=>{
    if (response.resultCode===0){ dispatch(UnfollowAC(UserID))
    dispatch(ToggleIsFollowingProgressAC(UserID))
    }})
  }}

export default UsersReducer
import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { AddPostCreator, PostTextChangeCreator } from '../../../Redux/ProfileReducer';

const mapStateToProps = (state)=> {
  return ({Posts: state.ProfilePage.posts,  
           PostText: state.ProfilePage.NewPostText})
}

const mapDispatchToProps = (dispatch) =>  {
  return {PostChange:(text)=>{
    let action = PostTextChangeCreator(text)
    dispatch(action)},
          addPost:()=>{ dispatch(AddPostCreator())}  }}

const MyPostsContainer =connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer
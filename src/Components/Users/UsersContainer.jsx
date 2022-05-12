import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { FollowAC, SetUserCreator, UnfollowAC,SetTotalUserCountAC,SetCurrentPageAC,SetNumOfPageAC,ToggleIsFetchingAC,ToggleIsFollowingProgressAC,getUsersThunkCreator,getFollow, getUnfollow } from '../../Redux/UsersReducer';
import UsersAPIcontainer from './UsersAPIcontainer';

const mapStateToProps = (state) => {
  return ({ Users: state.UsersPage.Users,
    pageSize:state.UsersPage.pageSize,
    totalUserCount:state.UsersPage.totalUserCount,
    currentPage:state.UsersPage.currentPage,
    numOfPages:state.UsersPage.numOfPages,
    isFetching:state.UsersPage.isFetching,
    isFollowingProgress:state.UsersPage.isFollowingProgress
    })
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (UserId) => { dispatch(FollowAC(UserId)) },
    SetUsers: (Users) => { dispatch(SetUserCreator(Users)) },
    onUnfollow: (UserId) => { dispatch(UnfollowAC(UserId)) },
    SetTotalUserCount: (TotalUserCount) => { dispatch(SetTotalUserCountAC(TotalUserCount)) },
    SetCurrentPage: (CurrentPage) => {dispatch(SetCurrentPageAC(CurrentPage)) },
    SetNumOfPage: (CurrentPage) => {dispatch(SetNumOfPageAC(CurrentPage)) },
    ToggleIsFetching: (fetching) => {dispatch(ToggleIsFetchingAC(fetching)) },
    ToggleIsFollowingProgress: (UserID) => {dispatch(ToggleIsFollowingProgressAC(UserID)) },
    getUsersThunkCreator:(pageSize, currentPage)=>{dispatch( getUsersThunkCreator(pageSize, currentPage) )},
    getFollow: (UserID) => {dispatch(getFollow(UserID)) },
    getUnfollow: (UserID) => {dispatch(getUnfollow(UserID)) }
  }
}

const withRedirectComponent =withAuthRedirect (UsersAPIcontainer)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectComponent)

export default UsersContainer

import React from 'react';
import Pages from './Pages';
import Users from './Users';
import Loader from '../../assets/Img/Loader.gif';
import { Navigate } from 'react-router-dom';

class UsersAPIcontainer extends React.Component {

    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
           }

    getUsers = (Page) => {
        this.props.getUsersThunkCreator(this.props.pageSize, Page)
        this.props.SetCurrentPage(Page)
        }

    render() {
             if(this.props.isFetching){
            <Navigate to={'/Login/'} />
            return (
            
            <div>
                <Pages
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    SetNumOfPage={this.props.SetNumOfPage}
                    numOfPages={this.props.numOfPages}
                    getUsers={this.getUsers}
                    currentPage={this.props.currentPage}
                    isFetching={this.props.isFetching}
                />
    
                <br />
                {this.props.Users.map(
                    u => <Users
                        id={u.id}
                        name={u.name}
                        uniqueUrlName={u.uniqueUrlName}
                        photosLarge={u.photos.large}
                        photosSmall={u.photos.small}
                        status={u.status}
                        followed={u.followed}

                        onFollowClick={this.props.onFollow}
                        onUnfollowClick={this.props.onUnfollow}

                        isFetching={this.props.isFetching}
                        isFollowingProgress={this.props.isFollowingProgress}

                        ToggleIsFollowingProgress={this.props.ToggleIsFollowingProgress}
                        ToggleIsFetching={this.props.ToggleIsFetching}

                        getFollow={this.props.getFollow}
                        getUnfollow={this.props.getUnfollow}
                      
                    />)}
            </div>
        )
    }
    else {return(
        <div>
        <img src={Loader} />
        </div>)}
      
    }
}
export default UsersAPIcontainer




// let myUsers = (Props) => {

//      if (Props.Users.length === 0) {
//     //         Props.SetUsers([
//     //         { id: 1, fullName: 'mike', avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg", follow: true, Status: "hide", location: { city: "ff", country: "ff1" } },
//     //         { id: 2, fullName: 'alex', avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg", follow: false, Status: "hide", location: { city: "ff", country: "ff1" } },
//     //         { id: 3, fullName: 'stiv', avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg", follow: true, Status: "hide", location: { city: "ff", country: "ff1" } }
//     //     ])
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response=>{
//             Props.SetUsers(Response.data.items)
//       })
//      }
//     let UserItem = Props.Users.map(u => <User id={u.id} name={u.name} uniqueUrlName={u.uniqueUrlName} photosLarge={u.photos.large} photosSmall={u.photos.small} status={u.status} followed={u.followed} onFollowClick={Props.onFollow} onUnfollowClick={Props.onUnfollow} />)

//     return (
//         <div>
//             {UserItem}
//         </div>)


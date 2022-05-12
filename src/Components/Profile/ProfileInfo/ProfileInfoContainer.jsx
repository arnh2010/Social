import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { putUserStatus,getUserStatus,getUserProfile } from '../../../Redux/ProfileReducer';
import Loader from '../../../assets/Img/Loader.gif';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.Id :  this.props.myID
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
        }
    render() { 
                if (this.props.userProfile[0] !=  undefined){ 
                    return (
                       <div>
           <ProfileInfo
                    userProfile={this.props.userProfile[0]} 
                    userStatus={this.props.Status}
                    putUserStatus={this.props.putUserStatus}
                    />
            </div>)}
             else {return(<div>
                <img  src={Loader} />
                {/* <img className={s.loader} src={Loader} /> */}
               </div>)
            }
    }
}

const mapStateToProps = (state) => {
    return ({
        userProfile: state.ProfilePage.usersProfiles,
        isLogin: state.AuthPage.isLogin,
        myID: state.AuthPage.id,
        Status:state.ProfilePage.Status
    })
}

export default compose(
    connect(mapStateToProps, { putUserStatus,getUserStatus,getUserProfile }),
    withAuthRedirect
)(ProfileInfoContainer)


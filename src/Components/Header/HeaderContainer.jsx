import React from "react";
import { connect } from "react-redux";
import { getAuth,Logout } from "../../Redux/AuthReducer";
import Header from "./Header";
import s from './HeaderContainer.module.css';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <div className={s.header}>
                <Header {...this.props} Logout={this.props.Logout} /> </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            email: state.AuthPage.email,
            id: state.AuthPage.id,
            login: state.AuthPage.login,
            isLogin: state.AuthPage.isLogin,
            avatar: state.AuthPage.avatar
        }
    )
}

export default connect(mapStateToProps, { getAuth,Logout })(HeaderContainer)
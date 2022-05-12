import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import { useMatch } from 'react-router-dom';

const Profile = () => {
    const match = useMatch('/Profile/:Id/');
    return <div>

        <ProfileInfoContainer match={match}/>
        <MyPostsContainer />
    </div>
}

export default Profile;
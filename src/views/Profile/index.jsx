import React from 'react';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            Profile
            <Outlet></Outlet>
        </div>
    );
}

export default Profile;

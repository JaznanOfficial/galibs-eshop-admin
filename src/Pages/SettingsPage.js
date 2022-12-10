import React from 'react';
import EditProfile from '../Components/Settings/EditProfile';

const SettingsPage = () => {
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl  font-extrabold text-black">Edit Profile</h1>
            </div>
            <EditProfile />
            
        </div>
    );
};

export default SettingsPage;
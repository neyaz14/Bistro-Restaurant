import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AdminHome = () => {
    const {user }= useContext(AuthContext)
    return (
        <div>
            Admin Home from an admin view-- where he will update his own data
        </div>
    );
};

export default AdminHome;
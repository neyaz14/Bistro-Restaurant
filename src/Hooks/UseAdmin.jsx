import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure';

const UseAdmin = () => {
    const {user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: isadmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        queryFn: async ()=>{
            const res= await axiosSecure.get(`users/admin/${user?.email}`);
            console.log(res.data)
            return res.data?.admin;
        } 
    });


    return [isadmin,isAdminLoading]
};

export default UseAdmin;
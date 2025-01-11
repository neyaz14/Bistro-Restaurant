import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const PaymentHistory = () => {
    const {user}= useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: payments=[]} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res= axiosSecure.get(`payments/${user.email}`)
            return (await res).data;
        }
    })
    return (
        <div>
            <h2 className="text4-xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transictionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
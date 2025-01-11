import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import UseCart from '../../../Hooks/UseCart';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';

const CheckOutForm = () => {
    const [clientSecret,setclientSecret] = useState('');
    const [transictionId,settransictionId] = useState('');
    // const 
    const {user} = useContext(AuthContext)
    const stripe = useStripe();
    const ellements = useElements();
    const axiosSecure = UseAxiosSecure();
    const [cart,refetch] = UseCart();
    const totalPrice = cart.reduce((total, item)=> total+item.foodPrice, 0)
    // console.log(totalPrice)
    useEffect(()=>{
        if(totalPrice>0){
            axiosSecure.post('/create-payment-intent', {price:totalPrice})
        .then(res=>{
   
            setclientSecret(res.data.clientSecret);
        })
        }
    },[axiosSecure, totalPrice])

    const handlesubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !ellements){
            return;
        };
        const card = ellements.getElement(CardElement);
        if(card == null){
            return;
        };

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        error?console.log('error',error):console.log('payment done',paymentMethod)

        // confirm payment
        const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details:{
                    email: user?.email || 'annonymous',
                    name: user?.displayName || 'annonymous'

                }
            }
        })
        if(confirmError){
            toast.error(confirmError)
        }else{
            toast.success('Payment intent',paymentIntent)
            console.log('Payment intent',paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transiction id', paymentIntent.id)
                toast.success(paymentIntent.id)
                settransictionId(paymentIntent.id)
                // now post in db info about payment
                const paymentInfo ={
                    email:user?.email,
                    price: totalPrice,
                    date: new Date(), //user momentjs to conver UTC format
                    cartIds : cart.map(item=> item._id),
                    menuIds: cart.map(item=>item.foodId),
                    transictionId: paymentIntent.id
                }
                const res = axiosSecure.post('payments', paymentInfo)
                refetch()
            }
        }
    }
    return (
        <form onSubmit={handlesubmit}>
            <CardElement>
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            </CardElement>
            <button className='btn btn-success text-white' type='submit' disabled={!stripe || !clientSecret}>Pay</button>
            <div>
                {
                    transictionId && <big className='text-green-600 font-bold '>
                        Your transicton id : {transictionId}
                    </big>
                }
            </div>
        </form>
    );
};

export default CheckOutForm;
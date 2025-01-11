import React from 'react';
import Title from '../../../components/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


// TODO : Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PKEY)

const Payment = () => {
    return (
        <>
            <Title heading={'Payment'} subHeading={'Please Pay to eat'}></Title>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm stripePromise={stripePromise}></CheckoutForm>
                </Elements>
            </div>
        </>
    );
};

export default Payment;
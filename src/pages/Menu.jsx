import React from 'react';
import SharedBanner from '../components/SharedBanner';
import banner from '../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BistroBoss/Menu</title>
                <meta name="description" content="Explore our delicious menu items!" />
            </Helmet>
            <SharedBanner img={banner} header={'OUR MENU'} text={"Would you like to try a dish?"}></SharedBanner>

            <Title heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></Title>
        </div>
    );
};

export default Menu;
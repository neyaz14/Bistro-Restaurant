import React from 'react';
import SharedBanner from '../components/SharedBanner';
import banner from '../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title';

import useMenu from '../Hooks/UseMenu';
import MenuCategory from '../MenuComponents/MenuCategory';

import soupImg from   '../assets/menu/soup-bg.jpg'
import saladImg from  '../assets/menu/salad-bg.jpg'
import pizzaImg from  '../assets/menu/pizza-bg.jpg'
import dessertImg from'../assets/menu/dessert-bg.jpeg'
const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu)
    const desserts = [...menu].filter(item => item.category === 'dessert').slice(0, 6)
    const offered = [...menu].filter(item => item.category === 'offered')
    // console.log(offered)
    const pizza = [...menu].filter(item => item.category === 'pizza').slice(0, 6)
    const salad = [...menu].filter(item => item.category === 'salad').slice(0, 6)
    const soup = [...menu].filter(item => item.category === 'soup').slice(0, 6)
    const drinks = [...menu].filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <SharedBanner img={banner} header="Explore our delicious menu items!"></SharedBanner>

            <Title subHeading="Don't Miss" heading="Today's Offer"></Title>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;
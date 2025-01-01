import React from 'react';
import SharedBanner from '../components/SharedBanner';
import banner from '../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title';
import PopularMenu from '../HomeComponents/PopularMenu';
import useMenu from '../Hooks/UseMenu';
import MenuCategory from '../MenuComponents/MenuCategory';
import SectionBanner from '../MenuComponents/SectionBanner';
const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu)
    const dessert = [...menu].filter(item => item.category === 'dessert').slice(0, 6)
    const offered = [...menu].filter(item => item.category === 'offered')
    // console.log(offered)
    const pizza = [...menu].filter(item => item.category === 'pizza').slice(0, 6)
    const salad = [...menu].filter(item => item.category === 'salad').slice(0, 6)
    const soup = [...menu].filter(item => item.category === 'soup').slice(0, 6)
    // const drinks = [...menu].filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>BistroBoss/Menu</title>
                <meta name="description" content="Explore our delicious menu items!" />
            </Helmet>
            <SharedBanner img={banner} header={'OUR MENU'} text={"Would you like to try a dish?"}></SharedBanner>

            {/* Todays offer */}
            <section id='Todays-offer'>
                <Title heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></Title>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                    {offered.map(card => <MenuCategory key={card._id} card={card}></MenuCategory>)}
                </div>
                <div className="mt-10 text-center">
                    <button className="text-gray-800 border-b-2 border-gray-800 hover:border-yellow-600 hover:text-yellow-600 transition">
                        VIEW FULL MENU
                    </button>
                </div>
            </section>


            <section id='dessert-section'>
                <SectionBanner header={'Dessert'} subtext={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                    {dessert.map(card => <MenuCategory key={card._id} card={card}></MenuCategory>)}
                </div>
                <div className="mt-10 text-center">
                    <button className="text-gray-800 border-b-2 border-gray-800 hover:border-yellow-600 hover:text-yellow-600 transition uppercase">
                        Order Your Favourite food</button>
                </div>
            </section>

            <section id='pizza-section'>
                <SectionBanner header={'Pizza'} subtext={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                    {pizza.map(card => <MenuCategory key={card._id} card={card}></MenuCategory>)}
                </div>
                <div className="mt-10 text-center">
                    <button className="text-gray-800 border-b-2 border-gray-800 hover:border-yellow-600 hover:text-yellow-600 transition uppercase">
                        Order Your Favourite Pizza</button>
                </div>
            </section>


            <section id='salad-section'>
                <SectionBanner header={'Salad'} subtext={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                    {salad.map(card => <MenuCategory key={card._id} card={card}></MenuCategory>)}
                </div>
                <div className="mt-10 text-center">
                    <button className="text-gray-800 border-b-2 border-gray-800 hover:border-yellow-600 hover:text-yellow-600 transition uppercase">
                        Order Your Favourite Salad</button>
                </div>
            </section>
            <section id='soup-section'>
                <SectionBanner header={'Soup'} subtext={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                    {soup.map(card => <MenuCategory key={card._id} card={card}></MenuCategory>)}
                </div>
                <div className="mt-10 text-center">
                    <button className="text-gray-800 border-b-2 border-gray-800 hover:border-yellow-600 hover:text-yellow-600 transition uppercase">
                        Order Your Favourite Soup</button>
                </div>
            </section>



        </div>
    );
};

export default Menu;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import Title from '../components/Title';
import useMenu from '../Hooks/UseMenu';

const PopularMenu = () => {
    // const [menu, setmenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popular = data.filter(items=> items.category === "popular")    
    //             setmenu(popular)
            
    //         })
    // }, [])
    const [menu] = useMenu();
    const popular = menu.filter(items=> items.category === "popular")     
    return (
        <div>
            <Title heading={"FROM OUR MENU"} subHeading={"Check it out"}></Title>
            <div className=" py-10 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {popular.map((item) => (
                           <MenuItem item={item} key={item._id}></MenuItem>
                        ))}
                    </div>

                    {/* View Full Menu Button */}
                    <div className="mt-10 text-center">
                        <button className="text-gray-800 border-b-2 border-gray-800 hover:border-yellow-600 hover:text-yellow-600 transition">
                            VIEW FULL MENU
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;
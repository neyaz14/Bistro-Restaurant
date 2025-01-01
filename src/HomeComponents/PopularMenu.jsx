import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';

const PopularMenu = () => {
    const [menu, setmenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(items=> items.category === "popular")    
                setmenu(popular)
            
            })
    }, [])
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <div className=' text-center'>
                    <p className='text-yellow-400  text-center'>---Check it out---</p>
                </div>
                <div className='border-y-2 w-80 py-4 text-center my-4'>
                    <h1 className='text-4xl'>FROM OUR MENU</h1>
                </div>
            </div>
            <div className=" py-10 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {menu.map((item) => (
                           <MenuItem item={item} key={item.key}></MenuItem>
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
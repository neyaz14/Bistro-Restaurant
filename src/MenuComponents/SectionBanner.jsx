import React from 'react';
import bg from '../assets/home/chef-service.jpg';
const SectionBanner = ({header, subtext}) => {
    return (
        <div className='my-20'>
                   <div className="relative py-44">
                       {/* Background Image */}
                       <div
                           className="absolute  inset-0 bg-cover bg-center"
                           style={{
                               backgroundImage: `url(${bg})`, 
                           }}
                       ></div>
       
                       {/* Overlay */}
                       <div className="relative bg-white  bg-opacity-85 p-10 max-w-3xl mx-auto text-center shadow-md z-10">
                           <h1 className="text-4xl font-bold text-gray-900 mb-4">{header}</h1>
                           <p className="text-gray-700 ">
                           {subtext}
                           </p>
                       </div>
                   </div>
               </div>
    );
};

export default SectionBanner;
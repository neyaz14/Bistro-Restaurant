import React from 'react';
import bg from '../assets/home/chef-service.jpg';
const BistroComponents = () => {
    return (
        <div className='my-20'>
            <div className="relative py-44">
                {/* Background Image */}
                <div
                    className="absolute  inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bg})`, // Replace with your image URL
                    }}
                ></div>

                {/* Overlay */}
                <div className="relative bg-white  bg-opacity-85 p-10 max-w-3xl mx-auto text-center shadow-md z-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">BISTRO BOSS</h1>
                    <p className="text-gray-700 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroComponents;
import React from 'react';

const SharedBanner = ({img, header, text}) => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="bg-opacity-50 bg-black px-44 py-20">
                        <h1 className="mb-5 text-5xl font-bold">{header}</h1>
                        <p className="mb-5">
                            {text}
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedBanner;
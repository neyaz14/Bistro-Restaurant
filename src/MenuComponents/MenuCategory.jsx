import React from 'react';

const MenuCategory = ({card}) => {
    const {name, image, price, recipe} = card;
    // console.log(name, image, price, recipe)
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] border" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
}; 
 

export default MenuCategory;
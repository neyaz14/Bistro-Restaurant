import FoodCard from './FoodCard';


import React from 'react';

const CategoryTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                   {
                        items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                   </div>
        </div>
    );
};

export default CategoryTab;

import { Link } from 'react-router-dom';
import SharedBanner from '../components/SharedBanner';
import MenuItem from '../MenuComponents/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-6'>
            {title && <SharedBanner img={img} header={title}></SharedBanner>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center my-2'>
                <Link to={`/orderFood/${title}`}>
                    <button className="btn  btn-outline hover:text-orange-50 hover:bg-orange-400 border-0 border-orange-400 hover:border-orange-600 text-orange-400 border-b-4 mt-4">See all {title}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
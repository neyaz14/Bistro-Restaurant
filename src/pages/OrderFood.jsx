import { useState } from 'react';
import orderCoverImg from '../assets/shop/banner2.jpg'
// import Cover from '';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/UseMenu';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import CategoryTab from '../OrderComponents/CategoryTab';
import SharedBanner from '../components/SharedBanner';
// import FoodCard from '../OrderComponents/FoodCard';

const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div className='flex flex-col gap-3'>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <SharedBanner img={orderCoverImg} text={'Would you like to try a dish?'} header="Order Food"></SharedBanner>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='grid  justify-center my-5 '>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel  className=''>
                    
                   
                   
                    <CategoryTab items={salad}></CategoryTab>
                </TabPanel>
                <TabPanel>
                    <CategoryTab items={pizza}></CategoryTab>
                   
                </TabPanel>
                <TabPanel>
                    <CategoryTab items={soup}></CategoryTab>
                    
                </TabPanel>
                <TabPanel>
                    <CategoryTab items={desserts}></CategoryTab>
                    
                </TabPanel>
                <TabPanel>
                    <CategoryTab items={drinks}></CategoryTab> 
                    
                </TabPanel>
            </Tabs>
        </div>
    );
};


export default OrderFood;
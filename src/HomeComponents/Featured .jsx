
import featuredImg from '../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featuredImg})` }} className='bg-fixed'>
            <div className="featured-item  bg-opacity-50 bg-black text-white pt-8 my-20">

                <div className='flex flex-col items-center justify-center'>
                    <div className=' text-center'>
                        <p className='text-yellow-400  text-center'>---Check it out---</p>
                    </div>
                    <div className='border-y-2 w-80 py-4 text-center my-4'>
                        <h1 className='text-4xl'>FROM OUR MENU</h1>
                    </div>
                </div>
                <div className="md:flex justify-center items-center  bg-opacity-60 pb-20 pt-12 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                        <button className="btn text-white  btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
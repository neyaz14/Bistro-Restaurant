const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 rounded-md text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn  bg-yellow-50 hover:text-orange-50 hover:bg-orange-400 border-0 border-orange-400 hover:border-orange-600 text-orange-400 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
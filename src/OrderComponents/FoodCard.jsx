import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import useCart from "../Hooks/UseCart";

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { name, image, price, recipe, _id } = item;
    const axiosSecure = UseAxiosSecure();

    const [cart, refetch] = useCart();


    const handleAddtoCart = () => {
        if (user && user.email) {
            // DOne : send cardItem to the db
            const cartItem = {
                foodId: _id,
                userEmail: user.email,
                foodName: name,
                foodImage: image,
                foodPrice: price,
                foodRecipe: recipe
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success(`${item.name} Successfully added in ${user?.displayName}'s cart `,{ position: "top-center" })
                        refetch();
                    }

                })
        } else {
            toast.error('You are not logged in ')
            // state set kora hoise PrivateRoute er state location.pathname jei vabe set kora hoise sei vabe  
            navigate('/login', { state: location.pathname })

        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 rounded-md text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddtoCart} className="btn  bg-yellow-50 hover:text-orange-50 hover:bg-orange-400 border-0 border-orange-400 hover:border-orange-600 text-orange-400 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
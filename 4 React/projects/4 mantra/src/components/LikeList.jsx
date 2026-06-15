import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { addToCart, closeLike, removeToCart } from "../redux/features/addToCartSlice.js";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";


const LikeList = () => {

    const like = useSelector(state => state.addToCart.like);

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(closeLike(false))} className="fixed inset-0 z-50 bg-[#0000008f]">

            {/* Sidebar */}
            <div onClick={e => e.stopPropagation()} className="absolute right-0 top-0 h-screen w-full max-w-md bg-[#111827] p-5     ">

                <h1 className="text-2xl p-1 font-bold text-white cursor-pointer  mb-5">
                    <IoMdClose onClick={() => dispatch(closeLike(false))} />
                </h1>

                <div className="flex flex-col   gap-1 h-170   overflow-y-auto scrollbar-hide pb-10    ">

                    {
                        like.map((item, i) => (
                            <ListItem data={item} key={i} />
                        ))
                    }

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default LikeList;



const ListItem = ({ data }) => {

    const { name, description, price, rating, brand, image, id } = data;


    const cart = useSelector(state => state.addToCart.cart);

    const checkItemInCart = cart.some(items => items.id === id);


    const dispatch = useDispatch();
    const addToCartInItem = () => {
        dispatch(addToCart({ ...data, qty: 1 }));
        toast.success('Add to Cart')
    };


    const removeToCartInItem = () => {
        Swal.fire({
            title: "Are you sure you want to remove this item from the cart?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire("Item removed from cart", "", "success");
                dispatch(removeToCart(id))
            } else if (result.isDenied) Swal.fire("Item was not removed from the cart", "", "info");
        });

    };



    return (

        <div className="bg-[#1f2937] rounded-lg  p-2 flex gap-4">

            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover rounded-lg bg-white"
            />

            {/* Content */}
            <div className="flex-1">

                <h3 className="text-white text-lg font-semibold line-clamp-1">
                    {name}
                </h3>

                <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-3">

                    <div>
                        <p className="text-blue-400 font-bold text-lg">
                            ${(Number(price).toFixed(2))}
                        </p>
                        <div className="flex items-center gap-1 text-yellow-400">
                            <FaStar />
                            <span>{rating}</span>
                        </div>
                    </div>


                    {checkItemInCart ?
                        <button onClick={removeToCartInItem} className="  bg-[tomato]  transition text-white px-3 py-1 cursor-pointer  rounded">
                            Remove </button> :
                        <button onClick={addToCartInItem} className="  bg-blue-600 hover:bg-blue-700 transition text-white px-3 py-1 cursor-pointer  rounded">
                            Add
                        </button>}





                </div>



            </div>

        </div>
    );
};
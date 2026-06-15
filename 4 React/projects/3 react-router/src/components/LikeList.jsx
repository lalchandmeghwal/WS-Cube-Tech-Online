import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { closeLike } from "../store/features/cart/cartSlice";
const LikeList = () => {

    const like = useSelector(state => state.cart.like);

    const dispatch = useDispatch();

    return (
        <div  onClick={() => dispatch(closeLike(false))} className="fixed inset-0 z-50 bg-[#0000008f]">

            {/* Sidebar */}
            <div onClick={e=>e.stopPropagation()} className="absolute right-0 top-0 h-screen w-full max-w-md bg-[#111827] p-5     ">

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

        </div>
    );
};

export default LikeList;



const ListItem = ({ data }) => {

    const {
        title,
        description,
        price,
        rating,
        brand,
        thumbnail
    } = data;

    return (

        <div className="bg-[#1f2937] rounded-lg  p-2 flex gap-4">

            {/* Image */}
            <img
                src={thumbnail}
                alt={title}
                className="w-24 h-24 object-cover rounded-lg bg-white"
            />

            {/* Content */}
            <div className="flex-1">

                <h3 className="text-white text-lg font-semibold line-clamp-1">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-3">

                    <div>
                        <p className="text-blue-400 font-bold text-lg">
                            ${(price.toFixed(2)).padStart(2)}
                        </p>
                    </div>
                    <button className=" mt-4 bg-blue-600 hover:bg-blue-700 transition text-white px-2 py-1 cursor-pointer  rounded-lg">
                        Add
                    </button>

                    <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar />
                        <span>{rating}</span>
                    </div>

                </div>



            </div>

        </div>
    );
};
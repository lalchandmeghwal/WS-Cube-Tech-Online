import { Heart } from "lucide-react";
import Link from "next/link";

const products = [
    {
        id: 1,
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/product/1633446267-product-1.jpg",
        category: "Side and End Tables",
        title: "Hrithvik Stool",
        oldPrice: "Rs. 7,000",
        newPrice: "Rs. 6,000",
    },
    {
        id: 2,
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/product/1633446280-product-2.jpg",
        category: "Nest Of Tables",
        title: "Caroline Study Tables",
        oldPrice: "Rs. 3,000",
        newPrice: "Rs. 2,500",
    },
    {
        id: 3,
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/product/1633446294-product-3.jpg",
        category: "Coffee Table Sets",
        title: "Godfrey Coffee Table Set",
        oldPrice: "Rs. 3,000",
        newPrice: "Rs. 2,200",
    },
];




const ProductListing = ({ data }) => {
    return (
        <section className="py-12">
            <div className="max-w-[1370px] mx-auto px-4">
                <div className="grid lg:grid-cols-4 gap-10">
                    {/* Sidebar */}

                    <aside>


                        <div className="lg:col-span-1  h-130 overflow-y-auto categories ">
                            <h2 className="text-4xl font-serif font-bold mb-8">
                                Categories
                            </h2>

                            <div className="space-y-4">
                                {/* Tables */}
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold mb-2">
                                        Tables
                                    </h3>

                                    <div className="space-y-2">
                                        {[
                                            "Side and End Tables",
                                            "Nest Of Tables",
                                            "Coffee Table Sets",
                                            "Coffee Tables",
                                        ].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 text-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4"
                                                />
                                                {item}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Mirror */}
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold mb-2">
                                        Mirror
                                    </h3>

                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4"
                                        />
                                        Wooden Mirrors
                                    </label>
                                </div>

                                {/* Living Storage */}
                                <div>
                                    <h3 className="font-serif font-semibold mb-2">
                                        Living Storage/collections
                                    </h3>

                                    <div className="space-y-2">
                                        {["Prayer Units", "Display Unit", "Shoe Racks", "Chest Of Drawers", "Cabinets and Sideboard", "Bookshelves", "Tv Units",].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4"
                                                />
                                                {item}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Sofa Cum Bed */}
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold mb-2">
                                        Sofa Cum Bed
                                    </h3>

                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4"
                                        />
                                        Wooden Sofa Cum Bed
                                    </label>
                                </div>


                                {/* Living Storage */}
                                <div>
                                    <h3 className="font-serif font-semibold mb-2">
                                        Sofa Sets
                                    </h3>

                                    <div className="space-y-2">
                                        {["Sofa Cover", "L Shape Sofa", "1 Seater Sofa", "2 Seater Sofa", "3 Seater Sofa", "Wooden Sofa Sets", "Normal",].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4"
                                                />
                                                {item}
                                            </label>
                                        ))}
                                    </div>
                                </div>


                                {/* Swing Jhula */}
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold mb-2">
                                        Swing Jhula
                                    </h3>

                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4"
                                        />
                                        Wooden Jhula
                                    </label>
                                </div>




                            </div>

                        </div>

                        <div className=' my-4 bg-[#ebebeb] h-px w-full '></div>

                        <div className="lg:col-span-1  ">


                            <div className="space-y-4">
                                {/* Material */}
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold mb-2">
                                        Material
                                    </h3>

                                    <div className="space-y-2">
                                        {["Rose Wood", "Teak Wood", "Satin Wood", "Sal Wood", "Marandi Wood", "Mahogany Wood", "Mulberry Wood", "JackFruit",].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 text-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4"
                                                />
                                                {item}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className=' my-4 bg-[#ebebeb] h-px w-full '></div>

                                {/* Color */}
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold mb-2">
                                        Color
                                    </h3>

                                    <div className="space-y-2">
                                        {["Burnt Amber", "Golden Teak", "Carbon Black", "Faded Oak", "Weathered French Grey", "Faded Ochre", "Weathered Walnut", "Cobalt Blue", "Mango Green", "Black Finish",].map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center gap-3 text-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4"
                                                />
                                                {item}
                                            </label>
                                        ))}
                                    </div>
                                </div>






                            </div>

                        </div>


                    </aside>






                    {/* Product Section */}
                    <div className="lg:col-span-3">
                        {/* Top Bar */}
                        <div className="border border-[#ebebeb] p-3 flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                            <div></div>

                            <div className="flex items-center gap-4">
                                <span>Sort By :</span>

                                <select className="border border-[#ebebeb] px-4 py-2 outline-none">
                                    <option>Sort By</option>
                                    <option>Price Low To High</option>
                                    <option>Price High To Low</option>
                                </select>

                                <span className="text-gray-600">
                                    Showing 1-12 of 18 results
                                </span>
                            </div>
                        </div>

                        {/* Products */}


                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {data.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white shadow-lg overflow-hidden group">
                                    {/* Image */}
                                    <div className="overflow-hidden">
                                        <Link href={`/product-list/${item.id}`}>
                                            <img
                                                src={item.mainImage}
                                                alt={item.name}
                                                className="w-full aspect-square   transition duration-500  "
                                            />
                                        </Link>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center p-6">
                                        <p className="text-gray-500 mb-3">
                                            {item.category}
                                        </p>

                                        <h3 className=" font-serif text-black/80 font-semibold  mb-6 hover:text-[#bf9477] ">
                                            {item.name}
                                        </h3>

                                        <div className="flex justify-center gap-3 mb-6">
                                            <span className="line-through text-gray-500">
                                                ₹{item.originalPrice}
                                            </span>

                                            <span className="font-bold text-[#bf9477]">
                                                ₹{item.price}
                                            </span>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex justify-center">
                                            <button className="bg-gray-100 p-2 hover:bg-[#bf9477] cursor-pointer hover:text-white transition">
                                                <Heart size={22} />
                                            </button>

                                            <button className="bg-gray-100 px-8 cursor-pointer py-2 ml-1 hover:bg-[#bf9477] hover:text-white transition">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default ProductListing







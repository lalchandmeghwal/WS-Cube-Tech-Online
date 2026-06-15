"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductDetails = ({ product }) => {


    const [selectedImage, setSelectedImage] = useState(product.mainImage);



    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Images */}
                    <div>
                        <div className="border rounded-lg overflow-hidden">
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-125 object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-3 mt-4">
                            {
                                product.sideAngleImages.length < 4 && <img
                                    src={product.mainImage}
                                    alt={product.name}
                                    onMouseEnter={() => setSelectedImage(product.mainImage)}
                                    className="h-24 w-full  object-cover border cursor-pointer hover:border-black"
                                />
                            }


                            {product.sideAngleImages.map((img) => (
                                <img
                                    key={img.key}
                                    src={img.url}
                                    alt=""
                                    onMouseEnter={() => setSelectedImage(img.url)}
                                    className={` ${selectedImage === img.url ? "opacity-25 " :""}  h-24  w-full object-cover border cursor-pointer hover:border-black`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                            {product.category}
                        </span>

                        <h1 className="text-4xl font-bold mt-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-2 mt-3">
                            <Star
                                size={18}
                                className="fill-yellow-400 text-yellow-400"
                            />
                            <span>{product.rating.average}</span>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <span className="text-4xl font-bold text-[#bf9477]">
                                ₹{product.price.toLocaleString()}
                            </span>

                            <span className="line-through text-gray-500">
                                ₹{product.originalPrice.toLocaleString()}
                            </span>

                            <span className="text-green-600 font-semibold">
                                {product.discount}% OFF
                            </span>
                        </div>

                        <p className="text-gray-600 mt-6 leading-7">
                            {product.description}
                        </p>

                        {/* Colors */}
                        <div className="mt-8">
                            <h3 className="font-semibold mb-2">Colors</h3>

                            <div className="flex gap-3">
                                {product.color.map((color) => (
                                    <button
                                        key={color}
                                        className="border px-4 py-2 rounded hover:bg-black hover:text-white"
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div className="mt-8">
                            <h3 className="font-semibold mb-2">Sizes</h3>

                            <div className="flex gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className="border px-4 py-2 rounded hover:bg-black hover:text-white"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Stock */}
                        <div className="mt-8">
                            <p>
                                Stock:
                                <span className="text-green-600 font-semibold ml-2">
                                    {product.stock} Available
                                </span>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-8">
                            <button className="bg-black text-white px-8 py-3 flex items-center gap-2 rounded">
                                <ShoppingCart size={20} />
                                Add To Cart
                            </button>

                            <button className="border p-3 rounded">
                                <Heart size={22} />
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="mt-10 border-t pt-6 space-y-3">
                            <p>
                                <strong>Material:</strong> {product.material}
                            </p>

                            <p>
                                <strong>Warranty:</strong>{" "}
                                {product.warranty.summary}
                            </p>

                            <p>
                                <strong>SKU:</strong> {product.id}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6">
                        Specifications
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border p-5 rounded">
                            <h3 className="font-bold mb-4">Dimensions</h3>

                            <ul className="space-y-2">
                                <li>Width: {product.dimensions.width}</li>
                                <li>Height: {product.dimensions.height}</li>
                                <li>Depth: {product.dimensions.depth}</li>
                                <li>Weight: {product.dimensions.weight}</li>
                            </ul>
                        </div>

                        <div className="border p-5 rounded">
                            <h3 className="font-bold mb-4">Features</h3>

                            <ul className="list-disc pl-5 space-y-2">
                                {product.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductDetails
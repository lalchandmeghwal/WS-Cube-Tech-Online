import React, { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

import {
    EditorProvider,
    Editor,
    Toolbar,
    BtnBold,
    BtnItalic,
    BtnUnderline,
    BtnBulletList,
    BtnNumberedList,
} from "react-simple-wysiwyg";

const AddProducts = () => {
    // ================= IMAGE STATES =================
    const [productImage, setProductImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [galleryImage, setGalleryImage] = useState(null);

    // ================= DESCRIPTION =================
    const [description, setDescription] = useState("");

    // ================= INPUT REFS =================
    const productRef = useRef(null);
    const backRef = useRef(null);
    const galleryRef = useRef(null);

    // ================= IMAGE CHANGE =================
    const handleImageChange = (e, setImage) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    // ================= DRAG DROP =================
    const handleDrop = (e, setImage) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    // ================= UPLOAD BOX =================
    const UploadBox = ({
        title,
        image,
        inputRef,
        setImage,
    }) => {
        return (
            <div>
                <label className="block font-semibold mb-1">
                    {title}
                </label>

                <div
                    onClick={() => inputRef.current.click()}
                    onDrop={(e) => handleDrop(e, setImage)}
                    onDragOver={(e) => e.preventDefault()}
                    className="w-full h-[145px] border border-gray-300 bg-white flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                >
                    {image ? (
                        <img
                            src={image}
                            alt="preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <>
                            <UploadCloud
                                size={45}
                                className="text-gray-300 mb-2"
                            />

                            <p className="text-3xl text-gray-300 font-medium">
                                Drag and drop
                            </p>
                        </>
                    )}
                </div>

                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={(e) =>
                        handleImageChange(e, setImage)
                    }
                    className="hidden"
                />
            </div>
        );
    };

    return (
        <div className="w-full  p-5">
            {/* ================= TOP SECTION ================= */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* ================= LEFT SIDE ================= */}

                <div className="space-y-4">
                    <UploadBox
                        title="Product Image"
                        image={productImage}
                        inputRef={productRef}
                        setImage={setProductImage}
                    />

                    <UploadBox
                        title="Back Image"
                        image={backImage}
                        inputRef={backRef}
                        setImage={setBackImage}
                    />

                    <UploadBox
                        title="Gallery Image"
                        image={galleryImage}
                        inputRef={galleryRef}
                        setImage={setGalleryImage}
                    />
                </div>

                {/* ================= RIGHT SIDE ================= */}

                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* PRODUCT NAME */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Product Name
                            </label>

                            <input
                                type="text"
                                placeholder="Product Name"
                                className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
                            />
                        </div>

                        {/* PARENT CATEGORY */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Select Parent Category
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="mobile">Mobile Phones</option>
                                <option value="laptop">Laptops</option>
                                <option value="men">Men's Wear</option>
                                <option value="women">Women's Wear</option>

                            </select>
                        </div>

                        {/* SUB CATEGORY */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Select Sub Category
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Select Category</option>
                                <option value="mobile">Mobile Phones</option>
                                <option value="laptop">Laptops</option>
                                <option value="men">Men's Wear</option>
                                <option value="women">Women's Wear</option>
                            </select>
                        </div>

                        {/* SUB SUB CATEGORY */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Select Sub Sub Category
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="mobile">Mobile Phones</option>
                                <option value="laptop">Laptops</option>
                                <option value="men">Men's Wear</option>
                                <option value="women">Women's Wear</option>
                            </select>
                        </div>

                        {/* MATERIAL */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Select Material
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="">Neem</option>
                                <option value="">Babbul</option>
                                <option value="">Neem</option>
                                <option value="">Babbul</option>
                                <option value="">Neem</option>
                                <option value="">Babbul</option>
                                <option value="">Neem</option>
                                <option value="">Babbul</option>
                            </select>
                        </div>

                        {/* COLOR */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Select Color
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="">Red</option>
                                <option value="">Blue</option>
                                <option value="">Green</option>
                                <option value="">Gray</option>
                            </select>
                        </div>

                        {/* PRODUCT TYPE */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Select Product Type
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="">Featured</option>
                                <option value="">New Arrivals</option>
                                <option value="">Onsale</option>
                            </select>
                        </div>

                        {/* BEST SELLING */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Is Best Selling
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>

                        {/* TOP RATED */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Is Top Rated
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>

                        {/* UPSELL */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Is Upsell
                            </label>

                            <select className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none">
                                <option value="">Nothing Selected</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>

                        {/* ACTUAL PRICE */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Actual Price
                            </label>

                            <input
                                type="number"
                                placeholder="Actual Price"
                                className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
                            />
                        </div>

                        {/* SALE PRICE */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Sale Price
                            </label>

                            <input
                                type="number"
                                placeholder="Sale Price"
                                className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
                            />
                        </div>

                        {/* STOCK */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Total In Stocks
                            </label>

                            <input
                                type="number"
                                placeholder="Total In Stocks"
                                className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
                            />
                        </div>

                        {/* ORDER */}

                        <div>
                            <label className="block font-semibold mb-1">
                                Order
                            </label>

                            <input
                                type="number"
                                placeholder="Order"
                                className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* ================= DESCRIPTION ================= */}

            <div className="mt-12">
                <label className="block font-semibold mb-2">
                    Description
                </label>

                <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
                    <EditorProvider>
                        <Toolbar>
                            <BtnBold />
                            <BtnItalic />
                            <BtnUnderline />
                            <BtnBulletList />
                            <BtnNumberedList />
                        </Toolbar>

                        <Editor
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            containerProps={{
                                style: {
                                    minHeight: "250px",
                                    padding: "10px",
                                },
                            }}
                        />
                    </EditorProvider>
                </div>
            </div>

            {/* ================= BUTTON ================= */}

            <button className="mt-20 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-semibold">
                Add Product
            </button>
        </div>
    );
};


export default AddProducts

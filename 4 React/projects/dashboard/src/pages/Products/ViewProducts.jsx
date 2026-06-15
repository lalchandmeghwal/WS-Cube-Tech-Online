import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Men's",
    description: "Lorem ipsum dolor sit...",
    shortDescription: "Lorem ipsum dolor sit...",
    image:
      "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
    status: "Active",
  },
  {
    id: 2,
    name: "Men's",
    description: "Lorem ipsum dolor sit...",
    shortDescription: "Lorem ipsum dolor sit...",
    image:
      "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
    status: "Active",
  },
  {
    id: 3,
    name: "Men's",
    description: "Lorem ipsum dolor sit...",
    shortDescription: "Lorem ipsum dolor sit...",
    image:
      "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
    status: "Active",
  },
  {
    id: 4,
    name: "Men's",
    description: "Lorem ipsum dolor sit...",
    shortDescription: "Lorem ipsum dolor sit...",
    image:
      "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
    status: "Active",
  },
];

const ViewProducts = () => {
  return (
    <div className="w-full min-h-screen  p-4">

      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">

        {/* Header */}
        <div className="border-b bg-[#f1f5f9] border-gray-300 px-5 py-5">
          <h1 className="text-4xl font-semibold">
            Product Items
          </h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            {/* Table Head */}
            <thead className="bg-[#f9fafb] text-gray-700">
              <tr>

                <th className="p-5 text-left font-bold text-sm ">
                  DELETE
                </th>

                <th className="p-5 text-left  font-bold   text-sm ">
                  S. NO.
                </th>

                <th className="p-5 text-left  font-bold  text-sm ">
                  PRODUCT NAME
                </th>

                <th className="p-5 text-left  font-bold  text-sm ">
                  DESCRIPTION
                </th>

                <th className="p-5 text-left  font-bold  text-sm">
                  SHORT DESCRIPTION
                </th>

                <th className="p-5 text-left  font-bold  text-sm">
                  THUMBNAILS
                </th>

                <th className="p-5 text-left  font-bold  text-sm">
                  ACTION
                </th>

                <th className="p-5 text-left  font-bold  text-sm">
                  STATUS
                </th>

              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {products.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-300 "
                >

                  {/* Checkbox */}
                  <td className="p-5">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                    />
                  </td>

                  {/* Serial Number */}
                  <td className="p-5 text-[16px] text-gray-600">
                    {index + 1}
                  </td>

                  {/* Product Name */}
                  <td className="p-5 text-[16px] text-gray-700">
                    {item.name}
                  </td>

                  {/* Description */}
                  <td className="p-5">
                    <p className="text-[16px] text-gray-600">
                      {item.description}
                    </p>

                    <button class="text-[14px] cursor-pointer text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                      Read More
                    </button>
                  </td>

                  {/* Short Description */}
                  <td className="p-5">
                    <p className="text-[16px] text-gray-600">
                      {item.shortDescription}
                    </p>

                    <button class="text-[14px] cursor-pointer text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                      Read More
                    </button>
                  </td>

                  {/* Thumbnail */}
                  <td className="p-5">
                    <img
                      src={item.image}
                      alt="product"
                      className="w-17 h-17 rounded-lg object-cover"
                    />
                  </td>

                  {/* Action */}
                  <td className="p-5">
                    <div className="flex items-center gap-4">

                      <button>
                        <FaTrashAlt className="text-red-500 cursor-pointer text-2xl" />
                      </button>

                      <span className="text-gray-400 text-2xl">|</span>

                      <button>
                        <FaEdit className="text-yellow-500 cursor-pointer text-2xl" />
                      </button>

                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-5 text-2xl text-gray-600">
                    {item.status}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ViewProducts

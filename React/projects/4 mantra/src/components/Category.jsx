import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useMyContext } from '../store/MyContext';

const Category = () => {


    const { select, setSelect, selectBrands, setSelectBrands, setLoading } = useMyContext();
    const [categories, setCategories] = useState([]);
    const [brandsData, setBrandsData] = useState([]);



    const getCategories = async () => {
        setLoading(true)
        const res = await axios.get('https://wscubetech.co/ecommerce-api/categories.php');
        setCategories(res.data.data);
    };

    const getBrands = async () => {
        const res = await axios.get('https://wscubetech.co/ecommerce-api/brands.php');

        setBrandsData(res.data.data);
    };

    const handleBrand = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectBrands([value, ...selectBrands ]);
        } else {
            setSelectBrands(selectBrands.filter(item => item !== value));
        }

    }

    useEffect(() => {
        getCategories();
        getBrands();
    }, []);

    return (
        <div className='  mt-13'>
            <div className=' flex justify-between mt-4 px-4 ' >
                <h1 className=' font-semibold  ' >FILTERS</h1>
                <button className='  font-semibold text-[#ff3f6c]  ' >CLEAR ALL</button>
            </div>

            <div className=' mt-3 p-3 border border-[#ccc] ' >

                <h2 className='  font-bold opacity-65 uppercase ' >categories</h2>

                <div className=' overflow-auto h-60 py-2  ' >

                    <ul className=' flex flex-col gap-2  ' >

                        {categories.map((item, i) => (<li className=' flex items-center  gap-1 capitalize ' key={i} >

                            <input
                                type="checkBox"
                                name="category"
                                value={item.slug}
                                checked={select === item.slug}
                                onChange={() => setSelect(item.slug)}
                            />
                            {item.name}
                        </li>))}
                    </ul>

                </div>
                <h2 className=' py-2  font-bold  uppercase ' >BRAND</h2>
                <div className=' overflow-auto h-60 py-2  ' >
                    <ul className=' flex flex-col gap-2  ' >
                        {brandsData.map((item, i) => (<li
                            key={i}
                            className=' flex items-center  gap-1 capitalize '   >
                            <input
                                value={item.slug}
                                onChange={handleBrand}
                                type="checkBox" />
                            {item.name}
                        </li>))

                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Category

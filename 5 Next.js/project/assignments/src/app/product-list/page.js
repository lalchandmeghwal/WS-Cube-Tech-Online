import Link from 'next/link'
import ProductListing from './products'
import { product } from '../services/product'

const ProductList = async () => {
    const data = await product();
    console.log(data);

   

    return (
        <div>
            <div className="max-w-7xl mx-auto  px-4 py-6">
                <div className="text-center  mb-5">
                    <h1 className="text-4xl font-serif font-bold">
                        Top Rated
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">

                        <Link href={'/'}>  Home  </Link> <span className=" ml-3 text-[#bf9477] " > &gt;  Top Rated</span>
                    </p>
                </div>
                <div className=' my-4 bg-[#ebebeb] h-px w-full '></div>

            </div>

            <ProductListing data={data} />
        </div>
    )
}

export default ProductList

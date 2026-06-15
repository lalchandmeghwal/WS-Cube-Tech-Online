import axios from "axios";
import { useEffect } from "react";

const ProductDetails = () => {

    const getProducts = async () => {
        const res = await axios.get(
            'https://wscubetech.co/ecommerce-api/products.php',
            {
                params: {
                    page: 3,
                }
            }
        );
        console.log(res.data.data)
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (

        <div>
            {/* <ToastContainer position='top-center' /> */}
            <h1 className=" text-black text-4xl my-4 " > ProductDetails </h1>

        </div>
    );
};

export default ProductDetails;


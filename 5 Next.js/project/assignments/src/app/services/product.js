import axios from "axios"


const product = async () => {
    const res = await axios.get('https://e-commerce-api-henna-alpha.vercel.app/api/products');
    const data = res.data;
    return data;
}

const getProductDetails = async (id) => {
    const res = await axios.get('https://e-commerce-api-henna-alpha.vercel.app/api/products');
    const data = res.data;
    const oneData = data.find(obj=>obj.id === id)
    return oneData;
};

export { product, getProductDetails }

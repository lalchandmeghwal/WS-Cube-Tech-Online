import { getProductDetails } from '@/app/services/product';
import ProductDetails from './ProductDetails'
import axios from 'axios';

const page = async ({ params }) => {
  const { pid } = await params;


  const data = await getProductDetails(pid);



 

  return (
    <div>
      <ProductDetails product={data }/>
    </div>
  )
}

export default page

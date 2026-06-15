import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

const myContext = createContext();
const AaddToCartProvider = ({ children }) => {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const [like, setLike] = useState(JSON.parse(localStorage.getItem('like')) || []);
  const [closeLike, setlCoseLike] = useState(false);



  const addToCart = (obj) => {
    setCart(prev => ([...prev, obj]));
    toast.success('Add To Cart');
  };

  const removeToCartInItem = (id) => {
    setCart(prev => (prev.filter(item => item.id !== id)));
  };

  const changeQty = (id, finalQty) => {

    setCart(prev => (prev.filter(item => {
      if (item.id === id) {
        item.qty = finalQty;
      };
      return item;
    })));

  };



  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  useEffect(() => {
    localStorage.setItem('like', JSON.stringify(like));
  }, [like]);




  const value = {
    cart, setCart,
    addToCart,
    removeToCartInItem,
    changeQty,

    like, setLike,
    closeLike, setlCoseLike
  }

  return (
    <myContext.Provider value={value}>
      {children}
    </myContext.Provider>
  );
};

const useMyAaddToCart = () => useContext(myContext);

export { useMyAaddToCart };





export default AaddToCartProvider

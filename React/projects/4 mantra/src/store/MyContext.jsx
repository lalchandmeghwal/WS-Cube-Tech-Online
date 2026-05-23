import { createContext, useContext, useState } from "react";

const MyContext = createContext();


const MyProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [select, setSelect] = useState('');
    const [selectBrands, setSelectBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);




    const value = {
        products, setProducts,
        select, setSelect,
        selectBrands, setSelectBrands,
        loading, setLoading,
        page, setPage
    }



    return (
        <MyContext.Provider value={value} >
            {children}
        </MyContext.Provider>
    )
};

const useMyContext = () => useContext(MyContext)


export { MyProvider, useMyContext }
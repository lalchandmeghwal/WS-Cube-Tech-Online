import { createContext, useContext, useState } from "react";

const MyContext = createContext();


const MyProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const value = {
        count, setCount,
    }

    return (<MyContext.Provider value={value} >
        {children}
    </MyContext.Provider>)
}


const useMyContext = () => useContext(MyContext);
export { MyProvider, useMyContext };
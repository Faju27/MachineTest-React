import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    const [productList, setProductList] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [cartList, setCartList] = useState([]);
    
    return (
        <ProductContext.Provider value={{productList,setProductList,searchItem,setSearchItem,cartList,setCartList}} >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;

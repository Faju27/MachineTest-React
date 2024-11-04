import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    const [productList, setProductList] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [cartList, setCartList] = useState([]);

    const handleAddToCart = () => {
        const exist = cartList.find((Element) => Element.id == productList.id)
        if (exist) {
            const res = cartList.map((Element) => {
                if (Element.id == productList.id) {
                    return {
                        ...Element,
                        quantity: Element.quantity + 1,
                        totalPrice: ((Element.price - (Element.price * Element.discountPercentage/100))) * (Element.quantity + 1)
                    }
                    
                }
                return Element
            })
            setCartList(res)
        }else {
            productList.quantity = 1
            productList.totalPrice = productList.price - (productList.price * productList.discountPercentage/100)
            setCartList([productList, ...cartList])
        }
        return toast.success('Product added to cart '), 
        console.log(cartList),
        console.log(productList)
    }

    const removeFromCart = () => {
        const res =  cartList.filter(ele => ele.id != productList.id)
        setCartList(res)
        return toast.success("Product removed from cart")
    }

    const handleQtyUpdate = (operator) => {
        if (productList.quantity == 1 && operator == '-') {
            return removeCartProduct()
        }
        const response = cartList.map((Element) => {
            if (Element.id == productList.id) {
                return {
                    ...Element,
                    quantity: operator == "+" ? Element.quantity + 1 : Element.quantity - 1,
                    totalPrice:(Element.price - (Element.price * Element.discountPercentage/100)) * (operator == "+" ? Element.quantity +1 : Element.quantity -1)
                }
            }
            return Element
        })
        setCartList(response)
    }

    return (
        <ProductContext.Provider value={{productList,setProductList,searchItem,setSearchItem,cartList,setCartList,handleAddToCart,removeFromCart,handleQtyUpdate}} >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;

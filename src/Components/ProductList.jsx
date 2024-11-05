import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Provider/ProductProvider';
import toast from 'react-hot-toast';

const ProductList = ({product,cart}) => {

    const {cartList,setCartList} = useContext(ProductContext)
    const navigate = useNavigate()
    const handleAddToCart = () => {
        const exist = cartList.find((Element) => Element.id == product.id)
        if (exist) {
            const res = cartList.map((Element) => {
                if (Element.id == product.id) {
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
            product.quantity = 1
            product.totalPrice = product.price - (product.price * product.discountPercentage/100)
            setCartList([product, ...cartList])
        }
        return toast.success('Product added to cart ')

    }

    const removeCartProduct = () => {
        const res =  cartList.filter(ele => ele.id != product.id)
        setCartList(res)
        return toast.success("Product removed from cart")
    }

    const handleQtyUpdate = (operator) => {
        if (product.quantity == 1 && operator == '-') {
            return removeCartProduct()
        }
        const response = cartList.map((Element) => {
            if (Element.id == product.id) {
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
        <div key={product.id} className='border border-black p-2 bg-light rounded-2' style={{height:400,width:'15rem',cursor:'pointer'}}>
            <div onClick={() => navigate(`/product/${product.id}`)}>
                <img src={product.images[0]} alt="" style={{width:'100%',height:'250px'}}/>
            </div>
            <div onClick={() => navigate(`/product/${product.id}`)}>
                <h4 className='text-truncate'> {product.title} </h4>
            </div>
            {
                !cart && 
                <div className='d-flex justify-content-between'>
                    <div>
                        <span className='' style={{color:'red'}}><s>Rs {product.price} </s></span>
                        <span>Rs {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)} </span>
                    </div>
                    <div style={{color:'green'}}>
                        {product.discountPercentage}%
                    </div>
                </div>
            }

            {
                cart && 
                <div>
                    <div> Price : {product.totalPrice.toFixed(2)}</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button onClick={() => handleQtyUpdate("-")} style={{height: "30px", width: "30px"}} className='border-1 bg-primary rounded-1'>- </button>
                        <div> {product.quantity}  </div>
                        <button onClick={() => handleQtyUpdate("+")} style={{height: "30px", width: "30px"}} className='border-1 bg-primary rounded-1'>+</button>
                    </div>
                </div>
            }
            <div>
                {
                    !cart ?
                    <button className='btn btn-outline-success w-100 mt-3' onClick={() => handleAddToCart()}>Add to Cart</button>
                    : <button className='btn btn-outline-success w-100 mt-3' onClick={() => removeCartProduct()}>Remove</button>
                }
            </div>
        </div>
    );
}

export default ProductList;

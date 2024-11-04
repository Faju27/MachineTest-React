import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Provider/ProductProvider';

const ProductList = ({product,cart}) => {

    const {handleAddToCart,removeFromCart,handleQtyUpdate} = useContext(ProductContext)
    const navigate = useNavigate()

    return (
        <div key={product.id} className='border border-black p-2 bg-light rounded-2' style={{width:'15rem',cursor:'pointer'}}>
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
                    : <button className='btn btn-outline-success w-100 mt-3' onClick={() => removeFromCart()}>Remove From Cart</button>
                }
            </div>
        </div>
    );
}

export default ProductList;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState("")

    useEffect(() => {
        const handleProducts = async () => {
         try {
             fetch(`https://dummyjson.com/products/${id}`)
             .then(res => res.json())
             .then(products => {
                setProduct(products),
                setImage(products.images[0])
            })
         } catch (error) {
             console.log(error.message);
         }
        } 
        handleProducts()
         
     }, []);

    return (
        <div className='row gap-2 mx-2 my-5'>
            <div className='col-12 col-md-2 d-flex d-md-block gap-2'>
                {
                    product?.images.map((image) => {
                        return <img className='border' key={image} src={image} alt="" width={"100%"} height={150} onMouseEnter={() => setImage(image)} style={{objectFit:'contain'}}/>
                    })
                }
            </div>
            <div className='col-12 col-md-4 border border-2 align-content-center h-75'>
                <img src={image} alt="" width={'100%'} height={400} style={{objectFit:'contain'}}/>
            </div>
            <div className='col-12 col-md-5'>
                <h4 className='border-bottom border-black py-3'><b>{product?.title}</b></h4>
                <p><span className='text-success fw-bold'> -{product?.discountPercentage} % off</span><span className='ms-3 fw-bold'>Rs  {(product?.price - (product?.price * product?.discountPercentage/100)).toFixed(2)} /- </span></p>
                <p style={{fontSize:'12px',fontWeight:'bold',color:'grey'}}>M.R.P : <span>Rs <s className='text-danger'> {product?.price} </s> /-</span></p>
                <div><b>Rating :</b>{product?.rating} </div>
                <div className='border-bottom border-top py-3' style={{lineHeight:'10px'}}>
                    <h5 className='mb-4'><b>Product Details</b></h5>
                    <div className='d-flex gap-5'>
                        <div>
                            <p><b>Brand : </b></p>
                            <p><b>Category : </b></p>
                            <p><b>Stock Status : </b></p>
                            <p><b>Tags : </b></p>
                        </div>
                        <div>
                            <p>{product?.brand}</p>
                            <p>{product?.category} </p>
                            <p>{product?.stock} <span className='text-danger'>left</span></p>
                            <p> {product?.tags} </p>
                        </div>
                    </div>
                    <div>
                        <p className='lh-sm'>{product?.description}</p>
                    </div>
                </div>
                <div className='border-bottom py-3' style={{lineHeight:'10px'}}>
                    <h5><b>About This Item</b></h5>
                    <p><b>Warrenty : </b> {product?.warrantyInformation} </p>
                    <p><b>Shipping Information :</b> {product?.shippingInformation} </p>
                    <p><b>Availability : </b> {product?.availabilityStatus} </p>
                    <p><b>Return Policy :</b> {product?.returnPolicy} </p>
                </div>
                <div className='border-bottom py-3 w-75 gap-3 d-flex flex-column'>
                    <h5><b>Reviews</b></h5>
                    <div className='border-2 border border-black px-3 pt-3'> 
                        <p><b> {product?.reviews[0].comment} </b></p>
                        <div>
                        <p style={{color:'grey'}} className='text-end'><b> -{product?.reviews[0].reviewerName} </b></p>
                        </div>
                        <p> Date : <span style={{color:'grey'}}> {product?.reviews[0].date.slice(0,10)} </span></p>
                    </div>
                    <div className='border-2 border border-black px-3 pt-3'> 
                        <p><b> {product?.reviews[1].comment} </b></p>
                        <div>
                        <p style={{color:'grey'}} className='text-end'><b> -{product?.reviews[1].reviewerName} </b></p>
                        </div>
                        <p> Date : <span style={{color:'grey'}}> {product?.reviews[1].date.slice(0,10)} </span></p>
                    </div>
                    <div className='border-2 border border-black px-3 pt-3'> 
                        <p><b> {product?.reviews[2].comment} </b></p>
                        <div>
                        <p style={{color:'grey'}} className='text-end'><b> -{product?.reviews[2].reviewerName} </b></p>
                        </div>
                        <p> Date : <span style={{color:'grey'}}> {product?.reviews[2].date.slice(0,10)} </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

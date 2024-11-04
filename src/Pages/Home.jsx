import React, { Fragment, useContext, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import ProductList from '../Components/ProductList';
import { ProductContext } from '../Provider/ProductProvider';

const Home = () => {

    const { productList, setProductList, searchItem } = useContext(ProductContext)

    // useEffect(() => {
    //     const handleProducts = async () => {
    //      try {
    //          fetch("https://dummyjson.com/products")
    //          .then(res => res.json())
    //          .then(filteredData=> filteredData.products.filter(product => product.title.toLowerCase().includes(searchItem.toLowerCase())))
    //          .then(products => setProductList(products))
    //      } catch (error) {
    //          console.log(error.message);
    //      }
    //     } 
    //     handleProducts()
         
    //  }, [searchItem]);

     useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const result = await response.json()
                const filteredData = result.products.filter((product) => product.title.toLowerCase().includes(searchItem.toLowerCase()))
                setProductList(filteredData)


            } catch (error) {
                console.log(error.message);
            }
        }
        getProduct()

    }, [searchItem])



    return (
        <Fragment>
            <NavBar />
            <div className='d-flex flex-wrap gap-4 justify-content-center py-5 bg-warning-subtle' >
                {
                    productList.map((product) => {
                        return <ProductList 
                        product = {product}
                        key={product.id}
                        />
                    })
                }
            </div>
        </Fragment>
    );
}

export default Home;

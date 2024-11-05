import React, { Fragment, useContext, useState } from 'react';
import { ProductContext } from '../Provider/ProductProvider';
import { Container, Form, Navbar } from "react-bootstrap";
import { MdHome, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ProductList from '../Components/ProductList';

const CartPage = () => {

    const {searchItem, setSearchItem, cartList} = useContext(ProductContext)
    const navigate = useNavigate()


    return (
        <Fragment>
           <Navbar sticky='top' className='bg-dark'>
                <Container>
                    <Navbar.Brand className='col-3 text-warning fw-bold'> STUDIO BANANA </Navbar.Brand>
                        <Form className='col-5 d-md-block d-none '>
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            onChange={(item) => setSearchItem(item.target.value)}
                            value={searchItem}
                            />
                        </Form>
                        <div className='d-flex gap-2'>
                            <button className='btn btn-outline-warning d-flex gap-1 btn-sm' onClick={() => navigate("/")}>
                                <h6>Home</h6>
                                <MdHome size={20} />
                            </button>
                            <button className='btn btn-outline-warning d-flex gap-1 btn-sm'>
                                <h6>SignIn</h6>
                                <MdPerson size={20} />
                            </button>
                        </div>
                </Container>
            </Navbar>

            <div className='d-flex flex-wrap gap-4 justify-content-center py-5 bg-warning-subtle'  style={{height:'100vh'}}>
                {
                    cartList.map((product) => {
                        return <ProductList 
                        product = {product}
                        key = {product.id}
                        cart = {true}
                        />
                    })
                }
            </div>
        </Fragment>
    );
}

export default CartPage;

import React, { useContext } from 'react';
import { Container, Form, Navbar, } from "react-bootstrap";
import { MdPerson, MdShoppingCart } from "react-icons/md";
import { ProductContext } from '../Provider/ProductProvider';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const { searchItem, setSearchItem, cartList } = useContext(ProductContext)
    const navigate = useNavigate()

    return (
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
                            <button className='btn btn-outline-warning d-flex gap-1 btn-sm position-relative' onClick={() => navigate("cart")}>
                                <h6>Cart</h6>
                                <MdShoppingCart size={20} />
                                <div className='position-absolute fw-bold' style={{top:'-10px', left:'60px', color:'red'}}> {cartList.length} </div>
                            </button>
                            <button className='btn btn-outline-warning d-flex gap-1 btn-sm'>
                                <h6>SignIn</h6>
                                <MdPerson size={20} />
                            </button>
                        </div>
                </Container>
            </Navbar>
    );
}

export default NavBar;

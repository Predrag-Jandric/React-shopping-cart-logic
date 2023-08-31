import React, { useContext, useState } from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { CartContext } from '../CartContext'

function NavbarComp() {

  const cart = useContext(CartContext)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
console.log(productsCount);
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart has ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComp

import React, {useContext} from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'


// props.product is the product we are selling
function ProductCard(props) {

        const product = props.product
        const cart = useContext(CartContext)
        const productQuantity = cart.getProductQuantity(product.id)
        console.log([productQuantity]);

        return (
            <Card>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>€{product.price}</Card.Text>
                    <Button cariant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                </Card.Body>
            </Card>
        )
    }

export default ProductCard

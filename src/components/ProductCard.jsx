import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

// props.product is the product we are selling
function ProductCard(props) {

const product = props.product

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>€{product.price}</Card.Text>
                <Button cariant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard

import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

// creating empty functions
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
})

export default function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([])

    // Get info about product quantity
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    // Add One To Cart
    function addOneToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(product => product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                )
            )
        }
    }

    // Remove One From Cart
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(product => product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    }

    // Delete From Cart
    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id
                })
        )
    }

    // Get Total Cost
    function getTotalCost() {
        let totalCost = 0
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost
    }

    // defining these empty functions
    const contextValue = {
        items: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    }
    return (
        // passing functions to the provider
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
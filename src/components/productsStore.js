
const productsArray = [
    {
        id: "1",
        title: "Coffee",
        price: 5.55
    },
    {
        id: "2",
        title: "Water bottle",
        price: 34.29
    },
    {
        id: "3",
        title: "Mobile",
        price: 399.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData === undefined) {
        console.log('product Data does not exist: ' + id);
        return undefined
    }

    return productData
}

export { productsArray, getProductData };
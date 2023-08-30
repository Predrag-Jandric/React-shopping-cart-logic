
const productsArray = [
    {
        id: "1",
        title: "coffee",
        price: 5.34
    },
    {
        id: "2",
        title: "car",
        price: 1.23
    },
    {
        id: "3",
        title: "mobile",
        price: 34.4
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
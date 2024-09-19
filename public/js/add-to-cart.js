// Initialize cart from local storage or create an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add product to cart
function addToCart(productName, productPrice) {
    // Add product to cart array
    cart.push({
        name: productName,
        price: productPrice
    });

    // Save updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Check if total cart price qualifies for free shipping
    checkForFreeShipping();

    // Log the cart to see the items (for testing purposes)
    console.log(cart);
}

// Function to calculate total cart price
function calculateTotalPrice() {
    return cart.reduce((total, product) => total + product.price, 0);
}

// Function to check if total price qualifies for free shipping
function checkForFreeShipping() {
    const totalPrice = calculateTotalPrice();
    if (totalPrice >= 100) {
        alert('Shipping is now free! Your cart total is: $' + totalPrice);
    }
}

// Example: Add event listener for the Add To Cart button
document.querySelector('.add-to-cart').addEventListener('click', function () {


    // Fetch the product name from the page
    const productNameElement = document.querySelector('.product-name'); // Adjust the selector as needed
    const productName = productNameElement ? productNameElement.textContent.trim() : 'Unknown Product';

    // Fetch the product price from the page
    const productPriceElement = document.querySelector('.product-price'); // Adjust the selector as needed
    let productPrice = productPriceElement ? productPriceElement.textContent.trim() : 'Unknown Price';

    // If the price is a string like "$1232", remove the currency symbol and convert it to a number
    productPrice = parseFloat(productPrice.replace(/[^0-9.-]+/g, ""));

    // Log the results
    console.log(`Product Name: ${productName}`);
    console.log(`Product Price: ${productPrice}`);

    addToCart(productName, productPrice);
});

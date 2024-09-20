// // Initialize cart from local storage or create an empty array
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // On page load, check if the user has an active session
// window.onload = () => {
//     const sessionActive = localStorage.getItem('sessionActive');

//     if (sessionActive === null) {
//         // User is starting a new session, clear previous cart data
//         localStorage.removeItem('cart');  // Remove old cart data
//         cart = [];  // Reset cart in memory
//     }

//     // Mark the session as active
//     localStorage.setItem('sessionActive', 'true');
// };

// // On page unload (browser/tab close), clear session flag
// window.addEventListener('beforeunload', () => {
//     localStorage.removeItem('sessionActive');
// });

// // Function to add product to cart
// function addToCart(productName, productPrice) {
//     // Add product to cart array
//     cart.push({
//         name: productName,
//         price: productPrice
//     });

//     // Save updated cart in local storage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Check if total cart price qualifies for free shipping
//     checkForFreeShipping();

//     // Log the cart to see the items (for testing purposes)
//     console.log(cart);
// }

// // Function to calculate total cart price
// function calculateTotalPrice() {
//     return cart.reduce((total, product) => total + product.price, 0);
// }

// // Function to check if total price qualifies for free shipping
// function checkForFreeShipping() {
//     const totalPrice = calculateTotalPrice();
//     if (totalPrice >= 100) {
//         alert('Shipping is now free! Your cart total is: $' + totalPrice);
//     }
// }

// // Example: Add event listener for the Add To Cart button
// document.querySelector('.add-to-cart').addEventListener('click', function () {
//     // Fetch the product name from the page
//     const productNameElement = document.querySelector('.product-name'); // Adjust the selector as needed
//     const productName = productNameElement ? productNameElement.textContent.trim() : 'Unknown Product';

//     // Fetch the product price from the page
//     const productPriceElement = document.querySelector('.product-price'); // Adjust the selector as needed
//     let productPrice = productPriceElement ? productPriceElement.textContent.trim() : 'Unknown Price';

//     // If the price is a string like "$1232", remove the currency symbol and convert it to a number
//     productPrice = parseFloat(productPrice.replace(/[^0-9.-]+/g, ""));

//     // Log the results
//     console.log(`Product Name: ${productName}`);
//     console.log(`Product Price: ${productPrice}`);

//     addToCart(productName, productPrice);
// });





// Initialize cart from local storage or create an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// On page load, check if a session is already active (i.e., another tab is open)
window.onload = () => {
    if (!sessionStorage.getItem('sessionActive')) {
        // User is starting a new session, clear previous cart data if the session is new
        localStorage.removeItem('cart');  // Remove old cart data
        cart = [];  // Reset cart in memory
    }

    // Mark the session as active
    sessionStorage.setItem('sessionActive', 'true');
};

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

// No need for a beforeunload event here since sessionStorage handles the clearing

let cart = [];

function addToCart(productName, productPrice) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartBody = document.getElementById('cart-body');
    let cartTotal = document.getElementById('cart-total');
    cartBody.innerHTML = ''; // Clear the cart

    let total = 0;
    cart.forEach(product => {
        const productTotal = product.price * product.quantity;
        total += productTotal;
        cartBody.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td>$${productTotal.toFixed(2)}</td>
            </tr>
        `;
    });
    cartTotal.textContent = total.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to Checkout...');
});

// Example product data for testing "Add to Cart" functionality
document.addEventListener('DOMContentLoaded', function() {
    addToCart('ASUS ProArt PZ13', 1200);
    addToCart('Sony Xperia 5 IV', 699);
});

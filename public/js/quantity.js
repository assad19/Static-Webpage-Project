

let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity-input').value = quantity + ' pcs';
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity-input').value = quantity + ' pcs';
    }
}


let quantity2 = 1;
function increaseQuantity2() {
    quantity2++;
    document.getElementById('quantity-input2').value = quantity2 + ' pcs';
}

function decreaseQuantity2() {
    if (quantity2 > 1) {
        quantity2--;
        document.getElementById('quantity-input2').value = quantity2 + ' pcs';
    }
}


let cartCount = 0;
let cartItems = [];

// Event listener for Buy Now buttons
document.querySelectorAll('.buy-now-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        alert('Thank you for your purchase! Please fill out the form to complete your purchase.');
        addToCart(event.target.closest('.card'));
    });
});

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        alert('Item added to cart! Check the cart in upper right side to see how many items you have added.');
        addToCart(event.target.closest('.card'));
    });
});

// Function to add items to the cart and update the cart count
function addToCart(card) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    const itemTitle = card.querySelector('.card-title').textContent;
    const itemPrice = card.querySelector('.price').textContent;

    cartItems.push({ title: itemTitle, price: itemPrice });
    updateCartModal();
}

// Function to update the cart modal with the current items
function updateCartModal() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${item.title} - ${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

// Subscribe Button
const subscribeBtn = document.getElementById('subscribe-btn');
subscribeBtn.onclick = () => {
    alert('Subscribed successfully');
};

// Event listener for Order Form submission
document.querySelector('#orderForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    // Display receipt
    document.getElementById('receiptName').textContent = name;
    document.getElementById('receiptEmail').textContent = email;
    document.getElementById('receiptPhone').textContent = phone;
    document.getElementById('receiptProduct').textContent = product;
    document.getElementById('receiptQuantity').textContent = quantity;
    document.getElementById('receiptAddress').textContent = address;

    // Hide order form and show receipt
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('receipt').style.display = 'block';

    alert("Thank you for purchasing from our store! I'm looking forward to your order again.");
});
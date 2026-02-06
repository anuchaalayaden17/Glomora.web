// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('message').style.display = 'block';
        this.reset();
        setTimeout(function() {
            document.getElementById('message').style.display = 'none';
        }, 3000);
    });
}

// Shopping Cart with localStorage
function getCart() {
    const cartData = localStorage.getItem('glowmoraCart');
    return cartData ? JSON.parse(cartData) : [];
}
 //getItem is used to load the cart data from localStorage. If there is no data, it returns an empty array.
function saveCart(cart) {
    localStorage.setItem('glowmoraCart', JSON.stringify(cart));
}
//SetItem is used to save the cart data back to localStorage after adding or removing items.

function addToCart(name, price) {
    let cart = getCart();
    cart.push({ name: name, price: price });
    saveCart(cart);
    alert('Added to cart: ' + name);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartItems) {
        let cart = getCart();
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="cart-icon">🛒</div><p>Your cart is empty</p>';
            cartTotal.innerHTML = '';
        } else {
            let html = '';
            let total = 0;
            
            cart.forEach(function(item, index) {
                html += '<div class="cart-item">';
                html += '<span>' + item.name + '</span>';
                html += '<span> €' + item.price.toFixed(2) + '</span>';
                html += '<button onclick="removeItem(' + index + ')" style="background:#d9534f;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">Remove</button>';
                html += '</div>';
                total += item.price;
            });
            
            cartItems.innerHTML = html;
            cartTotal.innerHTML = 'Total: €' + total.toFixed(2);
        }
    }
}

function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCart();
}

// Load cart when page loads
if (document.getElementById('cartItems')) {
    updateCart();
}
// DummyJSON Quotes API 
const weatherDiv = document.getElementById('weather');
if (weatherDiv) {
    weatherDiv.innerHTML = '<p>✨ Loading...</p>';
    
    const randomId = Math.floor(Math.random() * 100) + 1;
    
    fetch('https://dummyjson.com/quotes/' + randomId)
        .then(res => res.json())
        .then(data => {
            weatherDiv.innerHTML = '<p>🕯️ "' + data.quote + '" - ' + data.author + '</p>';
        })
        .catch(err => {
            console.error('Error:', err);
            weatherDiv.innerHTML = '<p>Error loading quote</p>';
        });
}
// JavaScript Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Fade in animation for products
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        product.style.opacity = '0';
        product.style.transform = 'translateY(20px)';
        product.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Fade in animation for features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Button click animation
    const buttons = document.querySelectorAll('.btn, .add-btn, button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Hero fade in
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            hero.style.opacity = '1';
        }, 100);
    }
});
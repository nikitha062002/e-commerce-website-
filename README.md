
# E-Commerce Website

This repository contains the code for a comprehensive e-commerce website. The site includes user authentication, product management, and a user profile section. 

## Project Structure

1. **`home.html`** - The main e-commerce home page featuring product carousels, a search bar, and company information.
2. **`home.css`** - Styles for the e-commerce home page.
3. **`home.js`** - JavaScript for handling the home page, including search and add-to-cart functionality.
4. **`login.html`** - Login and Signup page with a flip animation between login and signup forms.
5. **`random.css`** - styles for the login and signup page
6. **`login.js`** - JavaScript for handling login and signup, including form flipping and local storage operations.
7. **`profile.html`** - User profile page displaying user details and allowing logout.
8. **`profile.css`** - Styles for the user profile page.
9. **`profile.js`** - JavaScript for displaying user profile details and handling logout.
10. **`home-profile.html`** - user page after logging in.
11. **`home.profile.css`** - styles for user page after loggin in.
12. **`home.log.js`** - JavaScript for display user page after loggin in 

## Features

- **Product Carousel:** Display featured products with add-to-cart functionality.
- **User Authentication:** Users can log in and sign up. Passwords are masked for security.
- **Profile Management:** Users can view their profile details and log out.
- **Responsive Design:** The website is designed to be responsive and user-friendly.

## How to Run

1. **Clone the repository:**
    ```sh
    git clone https://github.com/nikitha062002/e-commerce-website.git

    cd e-commerce-website
    ```

2. **Open `home.html` in a web browser to view the home page.**

## Usage

### Home Page (`home.html`)

- **Search Bar:** Search for products.
- **Product Carousel:** View and add products to the cart.


home.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Home Page</title>
    <link rel="stylesheet" href="home.css">

</head>
<body>
    <!-- Navbar -->
    <div class="navbar">
        <div class="icon-bar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div class="logo">sh.in</div>
        <div class="profile-icons">
            <a href="login.html" id="login">Login</a>
            <a href="profile.html" id="profile">Profile</a>
        </div>
    </div>

    <!-- Search Bar -->
    <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search for products...">
        <button id="search-btn">Search</button>
    </div>

    <!-- Product Carousel Section -->
    <section id="carousel">
        <h2>Featured Products</h2>
        <div class="product-carousel">
            <div class="product-box" data-name="Earphones" data-price="$50">
                <img src="wired earphones.webp" alt="Earphones">
                <div class="details">
                    <p>Earphones</p>
                    <p>$50</p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="product-box" data-name="Mobile Phone" data-price="$300">
                <img src="mobile.png" alt="Mobile Phone">
                <div class="details">
                    <p>Mobile Phone</p>
                    <p>$300</p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <!-- Repeat for other products -->
            <div id="saree_product" class="product-box" data-name="Saree" data-price="$120">
                <img src="saree.webp" alt="Saree">
                <div class="details">
                    <p>Saree</p>
                    <p>$120</p>
                </div>
                <button id="addcartsaree"class="add-to-cart">Add to Cart</button>
            </div>
            <!-- Add other products here -->
        </div>
    </section>

    <!-- About Company Section -->
    <section id="about-company">
        <h2>About Our Company</h2>
        <p>Mission: To provide quality products at affordable prices.</p>
        <p>Vision: To be the leading retailer in our industry.</p>
        <p>Contact: contact@ourcompany.com</p>
    </section>

    <script src="home.js"></script> <!-- Your existing home page JS -->
</body>
</html>

```
home.css
```sh
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: linear-gradient(Orange, yellow); /* Gradient background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Shadow effect */
}

.navbar a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    position: relative;
    transition: color 0.3s ease;
}

.navbar a:hover {
    color: black;
}

.navbar a:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: black;
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.7); /* Glow effect */
    transition: width 0.3s ease;
}

.logo {
    color: #ff6600; /* Orange color for logo */
    font-size: 24px;
    font-weight: bold;
}

.icon-bar {
    display: flex;
    align-items: center;
}

.icon-bar .bar {
    height: 3px;
    background: linear-gradient(to right, #ff7b00, #ff6600); /* Orange to yellow glow effect */
    margin: 5px 0;
    width: 20px;
    box-shadow: 0 0 10px rgb(255, 206, 12); /* Glow effect */
}

.icon-bar .bar:nth-child(1) {
    position: relative;
    bottom: -11px;
    left: 20px;
}

.icon-bar .bar:nth-child(2) {
    position: relative;
    bottom: 5px;
}

.icon-bar .bar:nth-child(3) {
    position: relative;
    bottom: -3px;
    right: 20px;
}

.profile-icons {
    display: flex;
    align-items: center;
}

.cart-icon {
    position: relative;
}

.cart-icon::after {
    content: ' ';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red; /* Example background color for the cart badge */
}

.search-bar {
    display: flex;
    justify-content: center;
    margin: 20px;
}

#search-input {
    padding: 10px;
    border-radius: 5px 0 0 5px;
    border: 2px solid #ddd;
    font-size: 1rem;
    width: 300px;
}

#search-btn {
    padding: 10px 20px;
    border: none;
    background-color: #ff6600;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

#search-btn:hover {
    background-color: #ffcc00;
}

#about-company {
    padding: 20px;
    text-align: center;
}

/* Product Carousel CSS */
.product-carousel {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin: 20px auto;
}

.product-box {
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    background: #fff;
    border-radius: 10px;
}

.product-box img {
    max-width: 50%;
    height: auto;
    border-radius: 10px;
}
#saree_product p {
    position: relative;
    bottom: 20px;
}

#saree_product img{
    max-width: 80px;
}

.product-box .details {
    text-align: center;
    margin: 10px 0;
}

.product-box:hover {
    transform: translateY(-10px);
}

.add-to-cart {
    background: #ff6600;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
}
#addcartsaree{
    position: relative;
    bottom: 20px;
}

.add-to-cart:hover {
    background: #ffcc00;
}

```
home.js
```sh
document.addEventListener("DOMContentLoaded", () => {
    // Mock variable to check if the user is logged in
    let isLoggedIn = false; // Replace with actual login status check

    // Handle profile icon click
    const profileIcon = document.getElementById("profile");
    if (profileIcon) {
        profileIcon.addEventListener("click", () => {
            // Redirect to profile page
            window.location.href = "profile.html";
        });
    }

    // Handle cart icon click
    const cartIcon = document.getElementById("cart");
    if (cartIcon) {
        cartIcon.addEventListener("click", () => {
            // Redirect to cart page
            window.location.href = "shopping-cart.html";
        });
    }

    // Handle search functionality
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            // Perform search operation
            alert(`Searching for: ${query}`);
            
            // Implement search logic
            const productBoxes = document.querySelectorAll(".product-box");
            productBoxes.forEach(productBox => {
                const productName = productBox.getAttribute("data-name").toLowerCase();
                if (productName.includes(query)) {
                    productBox.style.display = "block"; // Show matching products
                } else {
                    productBox.style.display = "none";  // Hide non-matching products
                }
            });
        } else {
            alert("Please enter a search term.");
        }
    });

    // Handle Add to Cart button click in the product carousel
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            if (!isLoggedIn) {
                // Prompt user to log in or sign up
                alert("You need to log in or sign up to add items to the cart.");
                window.location.href = "login.html"; // Redirect to login page
                return;
            }

            const productBox = event.target.closest(".product-box");
            const productName = productBox.getAttribute("data-name");
            const productPrice = productBox.getAttribute("data-price");

            // Create a cart item object
            const cartItem = {
                name: productName,
                price: productPrice
            };

            // Retrieve existing cart from local storage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Add new item to cart
            cart.push(cartItem);

            // Save updated cart to local storage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Provide feedback to the user
            alert(`Added to cart: ${productName} for ${productPrice}`);
        });
    });
});

```
home-profile.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Home Page</title>
    <link rel="stylesheet" href="home.css"> <!-- Main CSS -->
    <link rel="stylesheet" href="product-carousel.css"> <!-- Product carousel CSS -->
    <link rel="stylesheet" href="shopping-cart.css"> <!-- Shopping cart CSS -->
    <link rel="stylesheet" href="home.profile.css"> <!-- Profile specific CSS -->
</head>
<body>
    <!-- Navbar -->
    <div class="navbar">
        <div class="icon-bar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <div class="logo">sh.in</div>
        <div class="profile-icons">
            <a href="shopping-cart.html" id="cart" class="cart-icon">Cart</a>
            <span id="user-name">User</span>
            <a href="home.html" id="logout-btn">Logout</a>
        </div>
    </div>
    
    <!-- Search Bar -->
    <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search for products...">
        <button id="search-btn">Search</button>
    </div>

    <!-- Product Carousel Section -->
    <section id="carousel">
        <h2>Featured Products</h2>
        <div class="product-carousel">
            <div class="product-box" data-name="Earphones" data-price="$50">
                <img src="wired earphones.webp" alt="Earphones">
                <div class="details">
                    <p>Earphones</p>
                    <p>$50</p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            <div class="product-box" data-name="Mobile Phone" data-price="$300">
                <img src="mobile.png" alt="Mobile Phone">
                <div class="details">
                    <p>Mobile Phone</p>
                    <p>$300</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
                <div id="saree_product" class="product-box" data-name="Saree" data-price="$120">
                    <img src="saree.webp" alt="Saree">
                    <div class="details">
                        <p>Saree</p>
                        <p>$120</p>
                    </div>
                    <button id="addcartsaree"class="add-to-cart">Add to Cart</button>
                </div>
            <!-- Add other products here -->
        </div>
    </section>
    
    <!-- About Company Section -->
    <section id="about-company">
        <h2>About Our Company</h2>
        <p>Mission: To provide quality products at affordable prices.</p>
        <p>Vision: To be the leading retailer in our industry.</p>
        <p>Contact: contact@ourcompany.com</p>
    </section>

    <!-- Profile Section -->
    <section id="profile-section" style="display: none;">
        <div class="profile-container">
            <div class="profile-header">
                <h1>Welcome, <span id="user-name">User<a href="profile.html"></a></span></h1>
                <button id="logout-btn">Logout</button>
            </div>
            <div class="profile-content">
                <p>Profile Details:</p>
                <div id="profile-details">
                    <!-- User profile details will be displayed here -->
                </div>
            </div>
            <div class="profile-footer">
                <button id="back-to-home">Back to Home</button>
            </div>
        </div>
    </section>

    <script src="product-carousel.js"></script> <!-- Product carousel JS -->
    <script src="home.js"></script> <!-- Your existing home page JS -->
    <script src="home.log.js"></script> <!-- Additional JS for profile handling -->
</body>
</html>

```
home.profile.css
```sh
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f0f0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ff6600;
    color: #fff;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar-left h1 {
    margin: 0;
}

.navbar-right {
    display: flex;
    align-items: center;
}

.navbar-right span {
    margin-right: 20px;
    font-size: 1rem;
}

.navbar-right a {
    color: #fff;
    text-decoration: none;
    margin-left: 15px;
    font-size: 1rem;
}

.navbar-right a:hover {
    text-decoration: underline;
}
#saree_product{
    position: relative;
    left: 120%;
    bottom: 103%;
}
```
home.log.js
```sh
document.addEventListener('DOMContentLoaded', function () {
    const userNameElem = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        userNameElem.textContent = loggedInUser.name;
    } else {
        window.location.href = 'login.html'; // Redirect to login if no user is logged in
    }

    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'home.html'; // Redirect to login page after logout
    });
});

```
### Login/Signup Page (`login.html`)

- **Flip Animation:** Switch between login and signup forms.
- **Form Handling:** Submit login or signup details. User information is stored in local storage.
login.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Signup</title>
    <link rel="stylesheet" href="random.css">
</head>
<body>
    <div class="container">
        <div class="flip-container" id="flip-container">
            <div class="flipper">
                <!-- Login Side -->
                <div class="front">
                    <h1>Login</h1>
                    <form id="login-form">
                        <div class="form-group">
                            <input type="email" id="email" name="email" required placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" name="password" required placeholder="Enter Password">
                        </div>
                        <button type="submit">Login <a href="home-profile.html"></a></button>
                        <a href="#" id="forgot-password">Forgot your password?</a>
                    </form>
                    <button id="flip-btn">Switch to Sign Up</button>
                </div>
                <!-- Signup Side -->
                <div class="back">
                    <h1>Sign Up</h1>
                    <form id="signup-form">
                        <div class="form-group">
                            <input type="text" id="name" name="name" required placeholder="Enter Your Name">
                        </div>
                        <div class="form-group">
                            <input type="email" id="email-signup" name="email" required placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <input type="password" id="password-signup" name="password" required placeholder="Enter Password">
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <button id="flip-back-btn">Switch to Login</button>
                </div>
            </div>
        </div>
    </div>
    <script src="login.js"></script>
</body>
</html>
```
random.css
```sh
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #ff6600, #ffcc00);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.container {
    perspective: 1200px;
}

.flip-container {
    position: relative;
    width: 320px;
    height: 500px;
    transform-style: preserve-3d;
    transition: transform 0.8s;
}

.flipper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s;
}

.flip-container.flipped .flipper {
    transform: rotateY(180deg);
}

.front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    background: #fff;
}

.front {
    background: rgba(255, 255, 255, 0.8);
}

.back {
    background: rgba(240, 240, 240, 0.8);
    transform: rotateY(180deg);
}

h1 {
    color: #ff6600;
    margin: 0;
    margin-bottom: 20px;
    font-size: 2rem;
}

.form-group {
    margin-bottom: 15px;
    width: 100%;
}

input {
    width: calc(100% - 20px);
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    background: linear-gradient(white, #f7f7f7);
}

input:focus {
    border-color: #ff6600;
    box-shadow: 0 0 12px rgba(255, 102, 0, 0.5);
    outline: none;
}

button {
    background: linear-gradient(135deg, #ff6600, #ffcc00);
    border: none;
    color: #fff;
    padding: 15px 30px;
    margin-top: 15px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
    background: linear-gradient(135deg, #ffcc00, #ff6600);
    transform: scale(1.05);
}

a {
    color: #ff6600;
    text-decoration: none;
    margin-top: 10px;
    display: block;
}

a:hover {
    text-decoration: underline;
}

#flip-btn, #flip-back-btn {
    background: linear-gradient(135deg, #ff6600, #ffcc00);
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease, transform 0.2s ease;
}

#flip-btn:hover, #flip-back-btn:hover {
    background: linear-gradient(135deg, #ffcc00, #ff6600);
    transform: scale(1.05);
}

```
login.js
```sh
document.addEventListener('DOMContentLoaded', function () {
    const flipContainer = document.getElementById('flip-container');
    const flipBtn = document.getElementById('flip-btn');
    const flipBackBtn = document.getElementById('flip-back-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    flipBtn.addEventListener('click', () => {
        flipContainer.classList.add('flipped');
    });

    flipBackBtn.addEventListener('click', () => {
        flipContainer.classList.remove('flipped');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Mock database check
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email);

        if (user && user.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'home-profile.html'; // Redirect to home-profile page
        } else if (user) {
            alert('Incorrect password. Please try again.');
        } else {
            alert('Account does not exist. Please sign up.');
        }
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email-signup').value;
        const password = document.getElementById('password-signup').value;

        // Mock database check
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert('Account already exists. Please log in.');
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully. Please log in.');
            flipContainer.classList.remove('flipped'); // Switch to login side
        }
    });
});

```
### Profile details (`profile.html`)

- **View Profile:** Display user profile details.
- **Logout:** Remove user data from local storage and redirect to home page.

profile.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="profile.css">
</head>
<body>
    <div class="profile-container">
        <div class="profile-header">
            <h1>Welcome, <span id="user-name">User</span></h1>
            <button id="logout-btn">Logout</button>
        </div>
        <div class="profile-content">
            <p>Profile Details:</p>
            <div id="profile-details">
                <!-- User profile details will be displayed here -->
            </div>
        </div>
        <div class="profile-footer">
            
```
profile.css
```sh
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.profile-container {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
}

.profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 15px;
    margin-bottom: 20px;
}

.profile-header h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
}

.profile-header button {
    background: #ff6600;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease, transform 0.2s ease;
}

.profile-header button:hover {
    background: #ffcc00;
    transform: scale(1.05);
}

.profile-content {
    font-size: 1rem;
    color: #333;
}

#profile-details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #f9f9f9;
}

.profile-footer {
    margin-top: 20px;
}

.profile-footer button {
    background: #ff6600;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease, transform 0.2s ease;
}

.profile-footer button:hover {
    background: #ffcc00;
    transform: scale(1.05);
}

```
profile.js
```sh
document.addEventListener('DOMContentLoaded', function () {
    const userNameElem = document.getElementById('user-name');
    const profileDetailsElem = document.getElementById('profile-details');
    const logoutBtn = document.getElementById('logout-btn');

    // Load user profile details
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
        userNameElem.textContent = loggedInUser.name;
        profileDetailsElem.innerHTML = `
            <p>Email: ${loggedInUser.email}</p>
            <p>Password: ${loggedInUser.password.replace(/./g, '*')}</p>
        `;
    } else {
        window.location.href = 'login.html'; // Redirect to login if no user is logged in
    }

    // Handle logout
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'home.html'; // Redirect to login page after logout
    });
});

```


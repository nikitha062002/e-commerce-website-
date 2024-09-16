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

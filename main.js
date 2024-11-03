// main.js

// Fetch products from API
fetch('https://course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle network errors
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data); // Pass data to display function
    })
    .catch(error => {
        document.getElementById('product-container').innerText = 'Failed to load products. Please try again later.';
        console.error('Fetch error:', error); // Log error to console
    });

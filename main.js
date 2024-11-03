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

    
// Function to display products on the webpage
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        // Extract product details
        const { company, price, name, image: { url } } = product.fields;

        // Create elements for displaying product
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productImage = document.createElement('img');
        productImage.src = url;
        productImage.alt = name;

        const productName = document.createElement('h2');
        productName.textContent = name;

        const productCompany = document.createElement('p');
        productCompany.textContent = `Company: ${company}`;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${(price / 100).toFixed(2)}`; // Convert price to dollars

        // Append elements to product div
        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productCompany);
        productDiv.appendChild(productPrice);

        // Append product div to container
        container.appendChild(productDiv);
    });
}

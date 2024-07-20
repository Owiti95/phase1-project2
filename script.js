document.addEventListener('DOMContentLoaded', function() {
    const vegetablesContainer = document.getElementById('vegetablesContainer');
    const orderForm = document.getElementById('orderForm');
    const productsList = document.getElementById('productsList');

    // Sample data (replace with actual data fetching if using a backend)
    const vegetables = [
        { name: 'Tomatoes', price: 150, image: 'https://media.istockphoto.com/id/1419141035/photo/cut-red-tomato-close-up-in-a-box.webp?b=1&s=170667a&w=0&k=20&c=o1dNGNHe54B1O11Ynce-WNQs-FnPx8gsF0NERTjmJC4=' },
        { name: 'Eggs', price: 600, image: 'https://media.istockphoto.com/id/1599935345/photo/chicken-eggs-on-carton.webp?b=1&s=170667a&w=0&k=20&c=J9694NIyCiDOB3JgIRjowdr3hOksydKLx3Bl3dcsIX4=' },
        { name: 'Onions', price: 150, image: 'https://media.istockphoto.com/id/1488345855/photo/many-red-onions-at-a-wholesale-vegetable-market.webp?b=1&s=170667a&w=0&k=20&c=b8dgtCGtDMPls9aVsgegqZOt-MI5c9wBPQvzy-KcJfw=' },
        { name: 'Kales', price: 150, image: 'https://media.istockphoto.com/id/1455022085/photo/curly-kale-on-a-wooden-cutting-board-healthy-eating-concept-superfoods-organic-food.webp?b=1&s=170667a&w=0&k=20&c=Hy4xl7Z0pe0PxM9lh5XyUeFH2nkyPSFF_4pSDr6RTNA=' },
        { name: 'Spinach', price: 150, image: 'https://media.istockphoto.com/id/172689786/photo/spinach-bunch-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=W1MxW3LVqCt80xN2X4AMlapBaWxZT-f-BrNvGD7nMCE=' }
    ];

    // Function to display vegetables
    function displayVegetables() {
        vegetables.forEach(vegetable => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${vegetable.image}" alt="${vegetable.name}">
                <h3>${vegetable.name}</h3>
                <p>kshs${vegetable.price.toFixed(2)}</p>
                <button class="buy-button" data-name="${vegetable.name}" data-price="${vegetable.price}">Buy</button>`;
            vegetablesContainer.appendChild(productElement);
        });
    }

    // Display vegetables initially
    displayVegetables();

    // Handle form submission
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const order = {};

        formData.forEach((value, key) => {
            order[key] = value;
        });

        // Process the order (send to backend or handle as needed)
        console.log('Order details:', order);

        // Clear products list and form after submission (for demo purposes)
        productsList.innerHTML = '';
        orderForm.reset();
    });

    // Handle buy button clicks (example: add product to order list)
    vegetablesContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('buy-button')) {
            const productName = event.target.dataset.name;
            const productPrice = parseFloat(event.target.dataset.price);

            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <p>${productName} - kshs${productPrice.toFixed(2)}</p>`;
            productsList.appendChild(productItem);
        }
    });
});

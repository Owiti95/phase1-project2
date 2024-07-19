function fetchQuotes() {
    return fetch('https://nairobi-organics.vercel.app/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch quotes');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
            return []; // Return empty array in case of error
        });
}

function displayQuotes() {
    fetchQuotes()
        .then(quotes => {
            const quoteDisplay = document.getElementById('quoteDisplay');

            if (quotes.length === 0) {
                quoteDisplay.textContent = 'No quotes available';
                return;
            }

            let currentIndex = 0;

            setInterval(() => {
                const { quote, author } = quotes[currentIndex];
                quoteDisplay.textContent = `"${quote}" - ${author}`;

                currentIndex = (currentIndex + 1) % quotes.length;
            }, 5000); // Display a new quote every 5 seconds (adjust as needed)
        })
        .catch(error => {
            console.error('Error displaying quotes:', error);
        });
}

// Call displayQuotes to start displaying quotes
displayQuotes();

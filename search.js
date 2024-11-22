 // JavaScript to handle search functionality
 document.getElementById('search-btn').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-bar').value.trim().toLowerCase();
    const seafoodCards = document.querySelectorAll('.seafood-card');

    if (searchTerm) {
      seafoodCards.forEach(card => {
        const seafoodName = card.querySelector('h3').textContent.toLowerCase();
        if (seafoodName.includes(searchTerm)) {
          card.style.visibility = 'visible'; // Show card if it matches the search term
        } else {
          card.style.visibility = 'hidden'; // Hide card if it doesn't match the search term
        }
      });
    } else {
      // If search is empty, show all seafood cards
      seafoodCards.forEach(card => {
        card.style.visibility = 'visible';
      });
    }
  });

  // Optional: Trigger search using the "Enter" key
  document.getElementById('search-bar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('search-btn').click();
    }
  });

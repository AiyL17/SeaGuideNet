// JavaScript to handle search functionality
document.getElementById('search-btn').addEventListener('click', function () {
  const searchTerm = document.getElementById('search-bar').value.trim().toLowerCase();
  const seafoodCards = document.querySelectorAll('.seafood-card');

  if (searchTerm) {
    // Show the "X" button if there is a search term
    document.getElementById('clear-btn').style.visibility = 'visible';

    seafoodCards.forEach(card => {
      const seafoodName = card.querySelector('h3').textContent.toLowerCase();
      if (seafoodName.includes(searchTerm)) {
        card.style.visibility = 'visible'; // Show card if it matches the search term
      } else {
        card.style.visibility = 'hidden'; // Hide card if it doesn't match the search term
      }
    });
  } else {
    // If search is empty, show all seafood cards and hide "X" button
    seafoodCards.forEach(card => {
      card.style.visibility = 'visible';
    });
    document.getElementById('clear-btn').style.visibility = 'hidden';
  }
});

// Optional: Trigger search using the "Enter" key
document.getElementById('search-bar').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('search-btn').click();
  }
});

// Clear search functionality when "X" button is clicked
document.getElementById('clear-btn').addEventListener('click', function () {
  document.getElementById('search-bar').value = ''; // Clear the input
  const seafoodCards = document.querySelectorAll('.seafood-card');
  
  // Show all seafood cards again
  seafoodCards.forEach(card => {
    card.style.visibility = 'visible';
  });
  
  // Hide the "X" button
  this.style.visibility = 'hidden';
});

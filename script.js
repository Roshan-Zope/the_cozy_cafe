let menuOpen = false;

function toggleMenu() {
  const slidingMenu = document.getElementById('sidebar');
  if (menuOpen) {
    slidingMenu.style.left = '-250px';  // Slide the menu out
  } else {
    slidingMenu.style.left = '0';  // Slide the menu in
  }
  menuOpen = !menuOpen;  // Toggle the state
}

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
  const slidingMenu = document.getElementById('sidebar');
  const toggleButton = document.querySelector('.menu-icon');

  // Check if the click is outside the sliding menu and the toggle button
  if (menuOpen && !slidingMenu.contains(event.target) && !toggleButton.contains(event.target)) {
    slidingMenu.style.left = '-250px';  // Slide the menu out
    menuOpen = false;  // Set menu state to closed
  }
});

const cardContainer = document.querySelector('.card-container');
const cardContainer1 = document.querySelector('.card-container1');
const cardContainer2 = document.querySelector('.card-container2');

function scrollLeft() {
  cardContainer.scrollBy({
    left: -200, // Scroll left by 200px
    behavior: 'smooth'
  });
}

function scrollRight() {
  cardContainer.scrollBy({
    left: 200, // Scroll right by 200px
    behavior: 'smooth'
  });
}

function scrollLeft1() {
  cardContainer1.scrollBy({
    left: -200, // Scroll left by 200px
    behavior: 'smooth'
  });
}

function scrollRight1() {
  cardContainer1.scrollBy({
    left: 200, // Scroll right by 200px
    behavior: 'smooth'
  });
}

function scrollLeft2() {
  cardContainer2.scrollBy({
    left: -200, // Scroll left by 200px
    behavior: 'smooth'
  });
}

function scrollRight2() {
  cardContainer2.scrollBy({
    left: 200, // Scroll right by 200px
    behavior: 'smooth'
  });
}
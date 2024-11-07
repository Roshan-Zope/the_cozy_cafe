function scrollLeft() {
    document.querySelector('.card-container').scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function scrollRight() {
    document.querySelector('.card-container').scrollBy({ left: 300, behavior: 'smooth' });
  }
  
  function scrollLeft1() {
    document.querySelector('.card-container1').scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function scrollRight1() {
    document.querySelector('.card-container1').scrollBy({ left: 300, behavior: 'smooth' });
  }
  
  function scrollLeft2() {
    document.querySelector('.card-container2').scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function scrollRight2() {
    document.querySelector('.card-container2').scrollBy({ left: 300, behavior: 'smooth' });
  }

  function scrollLeft3() {
    document.querySelector('.card-container3').scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function scrollRight3() {
    document.querySelector('.card-container3').scrollBy({ left: 300, behavior: 'smooth' });
  }

  function scrollLeft4() {
    document.querySelector('.card-container4').scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function scrollRight4() {
    document.querySelector('.card-container4').scrollBy({ left: 300, behavior: 'smooth' });
  }

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
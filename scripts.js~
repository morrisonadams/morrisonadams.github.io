// Function to toggle the navigation menu
function toggleNavMenu() {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('show');
}

// Event listener for the navigation menu button
document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.createElement('button');
  navButton.textContent = 'Menu';
  navButton.setAttribute('id', 'navButton');
  navButton.addEventListener('click', toggleNavMenu);

  const header = document.querySelector('.header');
  header.appendChild(navButton);
});

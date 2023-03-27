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

// function for tableau embedd
function setTableauVizSize() {
  var divElement = document.getElementById('viz1679682472121');
  if (!divElement) return;
  var vizElement = divElement.getElementsByTagName('object')[0];
  var width = divElement.offsetWidth;
  var height = (width * 1227) / 1000;
  vizElement.style.width = width + 'px';
  vizElement.style.height = height + 'px';
}

// function for resize
document.addEventListener('DOMContentLoaded', function () {
  setTableauVizSize();
  window.addEventListener('resize', setTableauVizSize);
});

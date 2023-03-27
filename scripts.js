function loadTableauScript(callback) {
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  scriptElement.onload = callback;
  document.body.appendChild(scriptElement);
}

function setTableauVizSize() {
  var divElement = document.getElementById('viz1679682472121');
  if (!divElement) return;
  var vizElement = divElement.getElementsByTagName('object')[0];
  var width = divElement.offsetWidth;
  var height = (width * 1227) / 1000;
  vizElement.style.width = width + 'px';
  vizElement.style.height = height + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
  loadTableauScript(function () {
    setTableauVizSize();
  });
  window.addEventListener('resize', setTableauVizSize);
});


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


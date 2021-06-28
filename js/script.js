// Select Toggle-menu Button
const toggleMenu = document.querySelector('.toggle-menu');

// Select The Toggle-menu Items
const toggleMenuItems = Array.from(document.querySelectorAll('.toggle-menu__item'));

// Select All (has-fade) Classes
const allhasFade = Array.from(document.querySelectorAll('.has-fade'));

// Select Overflow Layer
const overflowLayer = document.querySelector('.header__overlay');

// When Click On Toggle-menu Button
toggleMenu.addEventListener('click', function() {
  // Call (openMenu()) Function
  oepnMenu();
});

// When Click On (overlayLayer) Layer
overflowLayer.addEventListener('click', function() {
  // Call (openMenu()) Function
  oepnMenu();
});

// Function oepnMenu
function oepnMenu() {
  // If (toggle-menu) Contains Class (toggle-menu--active)
  if(toggleMenu.classList.contains('toggle-menu--active')) {
    // Remove Class (toggle-menu--active
    toggleMenu.classList.remove('toggle-menu--active');

    // Call Function toggleMenuItemActive();
    toggleMenuItemActive('active');

    // Call Function fadeStatus();
    fadeStatus('visible');

    // Add Remove (body--noscroll) from body element
    document.body.classList.remove('body--noscroll');
  }else { /* Else */
    // Add Class (toggle-menu--active)
    toggleMenu.classList.add('toggle-menu--active');

    // Call Function toggleMenuItemActive();
    toggleMenuItemActive('unactive');

    // Call Function fadeStatus();
    fadeStatus('unvisible');

    // Add Class (body--noscroll) on body element
    document.body.classList.add('body--noscroll');
  };
};

// Active Toggle-menu Item Function
function toggleMenuItemActive(activeStatus) {
  // Loop On All The (toggleMenuItems)
  toggleMenuItems.forEach(item => {
    // If (activeStatus) is (active)
    if(activeStatus === 'active') {
      // Remove Active Class
      item.classList.remove('toggle-menu__item--active');
    }else { // Else
      // Add Active Class
      item.classList.add('toggle-menu__item--active');
    };
  });
};

// Fade-Status Function
function fadeStatus(status) {
  // Loop On The (allhasFade) Classes
  allhasFade.forEach(element => {
    // If The Fade Status Is Visible
    if(status === 'visible') {
      // Add Class (fade-in)
      element.classList.add('has-fade');
      // Remove Class (fade-in)
      element.classList.remove('fade-in');
    }else { /* Else */
      // Remove Class (has-fade)
      element.classList.remove('has-fade');
      // Add Class (fade-in)
      element.classList.add('fade-in');
    };
  });
};
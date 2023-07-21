//class  togle active
const navbarNav = document.querySelector('.navbar-nav');
const logoMenu = document.querySelector('.logo-menu');

//ketika di click
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};
document.querySelector('#navbar-logo').onclick = (e) => {
    logoMenu.classList.toggle('active');
    e.preventDefault();
};


//klik diluar side bar
const hb = document.querySelector('#hamburger-menu');
const lm = document.querySelector('#navbar-logo');

document.addEventListener('click', function(e) {
    if(!lm.contains(e.target) && !logoMenu.contains(e.target)) {
        logoMenu.classList.remove('active');
    }
});
document.addEventListener('click', function(e) {
    if(!hb.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


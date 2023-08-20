
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
});

document.querySelector('.cta-btn').addEventListener('click', function () {
    this.textContent = 'Thanks for clicking!';
});

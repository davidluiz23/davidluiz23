const toggleButton = document.getElementById('toggle-button');
const navLinks = document.getElementById('navlinks');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');     // slide menu in/out
    toggleButton.classList.toggle('active'); // animate ☰ to X
});
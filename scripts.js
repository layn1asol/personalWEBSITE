document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const dropdown = document.querySelector('.menu .dropdown');

    menu.addEventListener('click', () => {
        dropdown.classList.toggle('show'); // Toggle the 'show' class for smooth transitions
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) {
            dropdown.classList.remove('show'); // Remove 'show' class when clicking outside
        }
    });
});

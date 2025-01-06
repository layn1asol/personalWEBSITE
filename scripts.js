
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const dropdown = document.querySelector('.menu .dropdown');

    menu.addEventListener('click', () => {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block'; // Toggle visibility
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) {
            dropdown.style.display = 'none'; // Hide dropdown when clicking outside
        }
    });
});




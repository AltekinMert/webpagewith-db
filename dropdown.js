var flag = true;

function showDropdown(event) {
    const sidebar = event.currentTarget.querySelector('.kitaplar-dropdown');
    const sidebarContent = sidebar.querySelector('.kitaplar-content-class');

    if (flag) {
        sidebar.classList.add('show'); // Show sidebar
        sidebarContent.classList.add('animate'); // Add class to trigger animation
        flag = false;
    } else {
        sidebar.classList.remove('show'); // Hide sidebar
        sidebarContent.classList.remove('animate'); // Reset animation
        flag = true;
    }
}

// Add event listeners to both kitaplar-container elements
document.querySelectorAll('.kitaplar-container').forEach(container => {
    container.addEventListener('mouseenter', showDropdown);
    container.addEventListener('mouseleave', showDropdown);
});



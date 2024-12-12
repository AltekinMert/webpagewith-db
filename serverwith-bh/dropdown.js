var flag=true;

function showDropdown() {
const sidebar = document.querySelector('.kitaplar-dropdown');
const sidebarContent = document.querySelector('.kitaplar-content-class');

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
document.querySelector('.kitaplar-container').addEventListener('mouseenter', showDropdown);
document.querySelector('.kitaplar-content-class').addEventListener('mouseleave', showDropdown);
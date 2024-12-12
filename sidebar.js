var flag=true;

   function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarContent = document.querySelector('.sidebar-content-class');

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
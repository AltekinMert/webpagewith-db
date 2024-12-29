
    function toggleDropdown() {
        var dropdown = document.getElementById("kitap-menu-drop");
        var icon = document.getElementById("dropdown-icon");
        dropdown.classList.toggle("show");
        // Change icon class based on dropdown visibility
        if (dropdown.classList.contains("show")) {
            icon.classList.remove("fa-angle-down");
            icon.classList.add("fa-angle-up");
        } else {
            icon.classList.remove("fa-angle-up");
            icon.classList.add("fa-angle-down");
        }
    }
    function toggleDropdown2() {
        var dropdown = document.getElementById("kitap-menu-drop2");
        var icon = document.getElementById("dropdown-icon2");
        dropdown.classList.toggle("show");
        // Change icon class based on dropdown visibility
        if (dropdown.classList.contains("show")) {
            icon.classList.remove("fa-angle-down");
            icon.classList.add("fa-angle-up");
        } else {
            icon.classList.remove("fa-angle-up");
            icon.classList.add("fa-angle-down");
        }
    }

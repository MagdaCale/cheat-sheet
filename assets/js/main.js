/* function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
} */

function toggleDropdown(dropdownId) {
    // Close any open dropdowns
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
        if (dropdown.id !== dropdownId && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });

    // Toggle the clicked dropdown
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}
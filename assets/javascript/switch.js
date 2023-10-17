document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    // Attach a click event listener to a parent element of the button
    document.body.addEventListener("click", function (event) {
        if (event.target && event.target.id === "switch") {
            // Handle the button click
            toggleTheme();
        }
    });

    function toggleTheme() {
        const body = document.body;
        body.classList.toggle("dark-theme");
        const isDarkTheme = body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }

    // Check the theme choice in local storage and apply it
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
});
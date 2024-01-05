document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    // click event listener to a parent element of the button
    document.body.addEventListener("click", function (event) {
        if (event.target && event.target.id === "switch") {
            toggleTheme();
        }
    });

    function toggleTheme() {
        const body = document.body;
        body.classList.toggle("dark-theme");
        const isDarkTheme = body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
});
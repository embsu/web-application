setTimeout(function () {
    // Your entire switch.js code goes here
    console.log("Switch.js Script loaded");

        const themeSwitchButton = document.getElementById("switch");
        console.log(themeSwitchButton); // Check if the button element is found

        const body = document.body;
        console.log(body); // Check if the body element is found

        // Function to toggle the theme and log the event
        function toggleTheme() {
            console.log("Button clicked");
            body.classList.toggle("dark-theme");
            // Store the theme choice in local storage
            const isDarkTheme = body.classList.contains("dark-theme");
            localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
        }

        // Event listener for the button click
        themeSwitchButton.addEventListener("click", toggleTheme);

        // Check if the theme choice is stored in local storage and apply it
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            console.log("Applying dark theme from local storage");
            body.classList.add("dark-theme");
        }

        // Event listener for theme-preserving links
        const themePreservingLinks = document.querySelectorAll(".theme-link");
        themePreservingLinks.forEach((link) => {
            link.addEventListener("click", () => {
                // Store the current theme choice in local storage
                const isDarkTheme = body.classList.contains("dark-theme");
                localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
            });
        });
    
}, 1000); // Delay execution by 1 second (adjust as needed)
document.getElementById("submit").addEventListener("click", function (event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Tarkista unohtuiko täyttää jokin kenttä?");
        event.preventDefault(); 
    } else {
        alert("Kiitos palautteesta!");
    }
});
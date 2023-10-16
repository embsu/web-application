//Tämä tiedosto lataa navigationbarin ja footerin jokaiseen html-tiedostoon, johon se on linkitetty.

$(function () {
    $("#navigationbar").load("navigationbar.html", function () { // lataa navigationbar.html:n #navigationbar elementtiin sivulla
        
    });
    $("#footer").load("footer.html"); // lataa footer.html:n #footer elementtiin sivulla
});







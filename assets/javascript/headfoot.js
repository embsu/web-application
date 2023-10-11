//Tämä tiedosto lataa headerin ja footerin jokaiseen html-tiedostoon, johon se on linkitetty.
// etsii switch.js -tiedoston ja lataa sen bodyyn, jotta headerin switch toimii jokaisessa html-tiedostossa

$(function () {
    $("#header").load("header.html", function () { // lataa header.html:n #header elementtiin sivulla

        

    });
    $("#footer").load("footer.html"); // lataa footer.html:n #footer elementtiin sivulla
});







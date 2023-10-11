// Tallenna alkuperäinen jQuery-olio toiseen muuttujaan
var j = jQuery.noConflict();

// Käytä jQuerya uuden nimen kautta (j sijaan $)
j(function() {
    // Voit käyttää j() jQuery-koodissasi
    j("#elementti").doSomething();
});

// Voit edelleen käyttää $ muissa kirjastoissa tai skripteissä
$(document).ready(function() {
    // Tämä ei enää käytä jQuerya, koska $ on vapautettu jQuerysta
});
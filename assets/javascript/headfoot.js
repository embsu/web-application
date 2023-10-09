$(function () {
    $("#header").load("header.html", function () {

        var script = document.createElement('script');
        script.src = '../assets/javascript/switch.js'; // EN OIKEIN YMMÄRRÄ TÄTÄ
        document.body.appendChild(script);
    });
    $("#footer").load("footer.html");
});
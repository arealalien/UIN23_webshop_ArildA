const loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(var(--background))";
});
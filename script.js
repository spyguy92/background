var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button")
css.textContent = "(" + color1.value + ", " + color2.value + ");";
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
function getRandomColor() {
    var letter = '0123456789ABCDF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color
}
color1.value = getRandomColor();
color2.value = getRandomColor();
btn.addEventListener("click", function () {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
})
function changeColor(color) {
    switch (color) {
        case "butBlack":
            colorShoe = "black";
            colorHex = "#434544"
            break;

        case "butGreen":
            colorShoe = "green";
            colorHex = "green"
            break;

        case "butBlue":
            colorShoe = "blue";
            colorHex = "#5466b1"
            break;

        case "butOrange":
            colorShoe = "orange";
            colorHex = "#d0461e"
            break;

        case "butRed":
            colorShoe = "red";
            colorHex = "#c12919"
            break;
    }
    document.getElementById("imgShoe").src = "./assets/img/" + colorShoe + "-nike.png"
    document.getElementById("imgShoe").alt = "Zapato deportivo Nike color " + colorShoe + ", para correr"
    document.getElementsByClassName("buyButton")[0].style.backgroundColor = colorHex;
    document.getElementsByClassName("imgBox")[0].style.backgroundColor = colorHex;
}
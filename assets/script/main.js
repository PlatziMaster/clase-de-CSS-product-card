const bodyBg = document.querySelector("body");
const shoeBg = document.querySelector(".imgBox");
const buyButton = document.querySelector(".buyButton");
const colorSelector = document.querySelectorAll(".color-selector");
const image = document.querySelector(".imgBox img");

colorSelector.forEach((btn) => {
  btn.onclick = () => {
    const name = btn.id;
    image.src = `./assets/img/${name}-nike.png`;
    image.alt = `Zapato deportivo Nike color ${name}, para correr`;

    switch (name) {
      case "black":
        bodyBg.style.backgroundColor = "#000000";
        shoeBg.style.backgroundColor = "#454545";
        buyButton.style.backgroundColor = "#2e2e2e";
        break;
      case "green":
        bodyBg.style.backgroundColor = "#162E0A";
        shoeBg.style.backgroundColor = "#356E17";
        buyButton.style.backgroundColor = "#2d5c22";
        break;
      case "blue":
        bodyBg.style.backgroundColor = "#070c24";
        shoeBg.style.backgroundColor = "#5466b1";
        buyButton.style.backgroundColor = "#5466b1";
        break;
      case "orange":
        bodyBg.style.backgroundColor = "#4A0B00";
        shoeBg.style.backgroundColor = "#ce6c3f";
        buyButton.style.backgroundColor = "#921700";
        break;
      case "red":
        bodyBg.style.backgroundColor = "#3D0900";
        shoeBg.style.backgroundColor = "#b24328";
        buyButton.style.backgroundColor = "#7a1200";
        break;
    }
  };
});

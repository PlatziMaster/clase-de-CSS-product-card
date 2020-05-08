const colorButtons = document.querySelectorAll('.colors__button');
const imageElement = document.querySelector('.imgBox img');

colorButtons.forEach((button) => {
  button.onclick = () => {
    const buttonColor = button.name;
    document.body.className = buttonColor;
    imageElement.src = `./assets/img/${buttonColor}-nike.png`;
    imageElement.alt = `Nike sneakers color ${buttonColor}, to run`;
  }
});
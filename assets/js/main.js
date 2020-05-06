const colors = ['blue', 'black', 'green', 'orange', 'red'];
const $colorsContainer = document.getElementById('colorsContainer');
const $image = document.querySelector('img');

const $buttons = colors.map(generateColorButton);
$buttons[0].classList.add('selected');

function generateColorButton(color) {
  const $button = document.createElement('a');
  $button.classList.add('button-color', `bg-${color}`);
  $button.addEventListener('click', (event) => onButtonClicked(event, color));
  $colorsContainer.appendChild($button);
  return $button;
}

function onButtonClicked(event, color) {
  $buttons.forEach(button => button.classList.remove('selected'));
  event.target.classList.add('selected');  
  document.querySelector('body').classList.value = color;
  $image.src = `./assets/img/${color}-nike.png`
  $image.alt = `Zapato deportivo Nike color ${color}, para correr`;
}
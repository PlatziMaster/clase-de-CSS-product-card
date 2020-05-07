// Make sure to have implemented the css classes and add the respective image before adding a color.
const colors = ['blue', 'black', 'green', 'orange', 'red'];

const $colorsContainer = document.getElementById('colorsContainer');
const $image = document.querySelector('img');
const $imgBox = document.querySelector('.imgBox');
const $buyButton = document.querySelector('button');
const $body = document.querySelector('body');

const $buttons = colors.map(generateColorButton);

// Initialize image
onButtonClicked({ target: $buttons[0] }, colors[0]);

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

  $body.classList.value = `bg-${color}-dark`;
  $buyButton.classList.value = `bg-${color}`;
  $imgBox.classList.value = `imgBox bg-${color}`;

  $image.src = `./assets/img/${color}-nike.png`;
  $image.alt = `Zapato deportivo Nike color ${color}, para correr`;
}

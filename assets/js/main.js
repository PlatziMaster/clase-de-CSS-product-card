const colors = document.querySelectorAll('.color');

colors.forEach(color => {



  color.addEventListener('click', event => {
    const style = getComputedStyle(event.target);
    changeColor(style.backgroundColor);
  })
});

function changeColor(rgbColor) {
  const container = document.querySelector('.imgBox');
  const img = document.querySelector('img');
  const button = document.querySelector('.buy-button');
  const templateSneaker = '-nike';
  const blueSneaker = 'nike-blue';
  let srcSneaker;
  let color;
  switch (rgbColor) {
    case 'rgb(77, 79, 78)':
      color = 'black';
      srcSneaker = `${color}${templateSneaker}`
      break;
    case 'rgb(98, 156, 100)':
      color = 'green';
      srcSneaker = `${color}${templateSneaker}`
      break;
    case 'rgb(207, 79, 43)':
      color = 'orange';
      srcSneaker = `${color}${templateSneaker}`
      break;
    case 'rgb(175, 57, 50)':
      color = 'red';
      srcSneaker = `${color}${templateSneaker}`
      break;
    default:
      color = 'blue';
      srcSneaker = blueSneaker;
      break;
  }
  img.src = `assets/img/${srcSneaker}.png`;
  container.style.backgroundColor = rgbColor;
  button.style.backgroundColor = rgbColor;
  debugger
}
const switchButtonColor = document.querySelector('.switchButtonColor')
const background = document.getElementById('imgBox')
const images = Array.from(background.querySelectorAll('.imgBox_image'))
const colorRed = switchButtonColor.querySelector('.redButton')
const colorGreen = switchButtonColor.querySelector('.greenButton')
const colorBlack = switchButtonColor.querySelector('.blackButton')


function switchColor(color){
  switch (color){
    case 'red':
      setColor('red')
    break;

    case 'black':
      setColor('black')
    break;

    case 'green':
      setColor('green')
    break;
  }
}
function setColor(color){
  function clear (){
    background.classList.remove('imgBox-red');
    background.classList.remove('imgBox-black');
    background.classList.remove('imgBox-green');
    for (let image of images) {
      image.style.display = 'none'
    }
  }
  clear()
  background.classList.add(`imgBox-${color}`);
  const image = images.filter((image) => image.className === `imgBox_image ${color}`)
  image[0].style.display = 'flex'
}


function showList(){
  const toggle = 'switchButtonColor-expand'
  if(switchButtonColor.classList.contains(toggle)){
    switchButtonColor.classList.remove(toggle)
  }else{
    switchButtonColor.classList.add(toggle)
  }
}
switchButtonColor.addEventListener('click', showList )
colorRed.addEventListener('click', () => {switchColor('red')})
colorBlack.addEventListener('click', () => {switchColor('black')})
colorGreen.addEventListener('click', () => {switchColor('green')})

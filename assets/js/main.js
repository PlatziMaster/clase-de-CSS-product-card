// Get Options colors
const optsColors = document.getElementsByClassName('options_color');
const body = document.body;
const imgBox = document.getElementsByClassName('imgBox')[0];
const img = document.getElementById('shoeImage');
const btnBuy = document.getElementById('btn_buy');

// Get size of window
const mobile = window.matchMedia('(max-width: 1080px)');

// Detect the change of the size of the srceen
mobile.addEventListener('change', ev =>{
  if(mobile.matches){
    img.style.transform = 'scale(1)';
  }else{
    img.style.transform = 'rotate(-30deg) scale(1)';
  }
})


for (let i = 0; i < optsColors.length; i++) {
  const el = optsColors[i];
  el.addEventListener('click', ev => {

    // remove before color selected
    for (let i = 0; i < optsColors.length; i++) {
      optsColors[i].classList.remove('options_color-select');        
    }
    
    // Add new color selected
    if(!el.classList.contains('options_color-select')){
      el.classList.add('options_color-select');      
    }

    // Change img, bg, btn color
    switch (el.classList.item(1)) {
      case 'options_color-blue':
          img.setAttribute('src', './assets/img/nike-blue.png')
          imgBox.style.backgroundColor = '#5466b1';
          body.style.backgroundColor = '#070c24';
          btnBuy.style.backgroundColor = '#5466b1';
        break;
      case 'options_color-black':
          img.setAttribute('src', './assets/img/black-nike.png')
          imgBox.style.backgroundColor = '#676767';
          body.style.backgroundColor = '#0d0d0d';
          btnBuy.style.backgroundColor = '#676767';
        break;
      case 'options_color-orange':
          img.setAttribute('src', './assets/img/orange-nike.png')
          imgBox.style.backgroundColor = '#f27b56';
          body.style.backgroundColor = '#9c1900';
          btnBuy.style.backgroundColor = '#f27b56';
        break;
      case 'options_color-red':
          img.setAttribute('src', './assets/img/red-nike.png')
          imgBox.style.backgroundColor = '#b13427';
          body.style.backgroundColor = '#811200';
          btnBuy.style.backgroundColor = '#b13427';
        break;
      case 'options_color-green':
          img.setAttribute('src', './assets/img/green-nike.png')
          imgBox.style.backgroundColor = '#6fa774';
          body.style.backgroundColor = '#2f5e23';
          btnBuy.style.backgroundColor = '#6fa774';
        break;
      default:
          body.style.backgroundColor = '#070c24';
        break;
    }

    // Animation change color
      if(mobile.matches){
        img.animate([
          {transform: 'scale(1)'},
          {transform: 'scale(.8)'},
          {transform: 'scale(1)'},
        ], {duration: 400, easing: 'linear'})
      }else{
        img.animate([
          {transform: 'rotate(-30deg) scale(1)'},
          {transform: 'rotate(-30deg) scale(.8)'},
          {transform: 'rotate(-30deg) scale(1)'},
        ], {duration: 400, easing: 'linear'})
      }

  })
}

// Animation image with btnNuy hover
  // Animation img button mouseover
btnBuy.addEventListener('mouseover', ev => {
  if(mobile.matches){
    img.style.transform = 'rotate(0deg) scale(1.04)';
    img.style.transform = 'scale(1.04)';
  }else{
    img.style.transform = 'rotate(-30deg) scale(1)';
    img.style.transform = 'rotate(-30deg) scale(1.04)';
  }
})
  // Animation img button mouseout
btnBuy.addEventListener('mouseout', ev => {
  if(mobile.matches){
    img.style.transform = 'scale(1)';
  }else{
    img.style.transform = 'rotate(-30deg) scale(1)';
  }
})




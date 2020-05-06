let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let white = document.querySelector('#white');
let black = document.querySelector('#black');
let red = document.querySelector('#red');
let pink = document.querySelector('#pink');
let img = document.querySelector('img');

let ruta = "./assets/img/rosada"
let pictures = 4, count = 1;

white.addEventListener('click', () => {
    callPictures('blanca');
});

black.addEventListener('click', () => {
    callPictures('negra');
});

red.addEventListener('click', () => {
    callPictures('roja');
});

pink.addEventListener('click', () => {
    callPictures('rosada');
})

function callPictures(color){
    ruta = `./assets/img/${color}`;
    img.src = `${ruta}/img1.png`;
    pictures = 4
    count = 1;
}

next.addEventListener('click', () => {
    if(count < pictures - 1){
        count ++;
        img.src = `${ruta}/img${count}.png`;
    }else{
        count = 1;
        img.src = `${ruta}/img${count}.png`;
    }
})

prev.addEventListener('click', () => {
    if(count > 1){
        count --;
        img.src = `${ruta}/img${count}.png`;
    }else{
        count = pictures - 1;
        img.src = `${ruta}/img${count}.png`;
    }
})

let $colors = document.querySelectorAll('.color');
let $img = document.querySelector('img');
let $imgBox = document.querySelector('.imgBox')
let $button = document.querySelector('button')
let color = null;

for (let i = 0; i < $colors.length; i++) {

    $colors[i].addEventListener('click', () => {
        color = $colors[i].getAttribute('value')

        $img.setAttribute('src', `./assets/img/${color}-nike.png`)

        switch (color) {
            case 'red':
                $imgBox.style.backgroundColor = '#801200';
                $button.style.backgroundColor = '#801200';
                break;
            case 'black':
                $imgBox.style.backgroundColor = '#303030';
                $button.style.backgroundColor = '#303030';
                break;
            case 'orange':
                $imgBox.style.backgroundColor = '#ffa500';
                $button.style.backgroundColor = '#ffa500';
                break;
            case 'green':
                $imgBox.style.backgroundColor = '#407838';
                $button.style.backgroundColor = '#407838';
                break;
            case 'blue':
                $imgBox.style.backgroundColor = '#5466b1';
                $button.style.backgroundColor = '#5466b1';
                break;
            case 'transparent':
                $imgBox.style.backgroundColor = '#ffc0cb';
                $button.style.backgroundColor = '#ffc0cb';
                break;
        }


    });

}
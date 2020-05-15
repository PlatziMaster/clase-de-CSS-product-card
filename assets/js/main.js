let selectors = document.getElementsByName('selector');

selectors.forEach(selector => {
    selector.addEventListener('click', e => {
        let imgBox = document.getElementsByClassName('imgBox')[0];
        let body = document.querySelector('body');
        let button = document.querySelector('button');

        let classNames = ['color-blue', 'color-black', 'color-orange', 'color-green', 'color-red'];
        let classNamesBody = ['color-blue-bg', 'color-black-bg', 'color-orange-bg', 'color-green-bg', 'color-red-bg'];
        
        let image = document.getElementsByTagName('img')[0];
        
        imgBox.classList.remove(...classNames);
        body.classList.remove(...classNamesBody);
        button.classList.remove(...classNames)
        
        switch (selector.id) {
            case 'blue':
                image.src = `./assets/img/nike-${selector.id}.png`
                break;
            default:
                image.src = `./assets/img/${selector.id}-nike.png`;
                break;
        }

        image.alt = `Zapato deportivo Nike color ${selector.id}, para correr`

        imgBox.classList.add(`color-${selector.id}`)
        button.classList.add(`color-${selector.id}`)
        body.classList.add(`color-${selector.id}-bg`)
    })
});




// inputs.map(item => {
//     console.log(`item: ${item}`);
// })
// document.getElementsByTagName('input').map(item => {
//     item.addEventListener(onclick, (event => {
//     console.log(this.className);
//     }));
// });
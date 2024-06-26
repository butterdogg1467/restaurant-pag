
let mainText;
let secondaryText;

let content = document.querySelector('#content')
export let currentPage = {
    home: false,
    menu: false,
    about: false
}


export default function createHome() {

    if (currentPage.home === true) {
        return
    }

    currentPage.home = true

        let backgroundImg = document.createElement('img')
        backgroundImg.src = '../images/pexels-jess-vide-5507643.jpg'
    
        document.body.style.backgroundImage = `url('${backgroundImg.src}')`;   
        document.body.style.backgroundSize = '105vw 100vh';
        document.body.style.backgroundRepeat = 'no-repeat';
    
        mainText = document.createElement('h1')
        mainText.textContent = 'La Trattoria Bella Vita'
        mainText.classList.add('homepageh1')
        content.appendChild(mainText)
    
        secondaryText = document.createElement('h2')
        secondaryText.textContent = 'Savor the Italian Experience'
        secondaryText.classList.add('homepageh2')
        content.appendChild(secondaryText)

}

export function homeRemove() {
    content.removeChild(mainText)
    content.removeChild(secondaryText)
}

export { mainText, secondaryText, content };
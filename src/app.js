import './styles/sass/main.scss'
import '../src/pug/index.pug'

import facebook from  './assets/icon-facebook.svg'
import twitter from   './assets/icon-twitter.svg'
import instagram from './assets/icon-instagram.svg'
import youtube from   './assets/icon-youtube.svg'
import up from        './assets/icon-up.svg'
import down from      './assets/icon-down.svg'
import favicon from   './assets/favicon-32x32.png'



const switchButton = document.getElementById('dark-mode')
const main = document.querySelector('body')
const changeTheme = document.querySelector('main')
const buttonMode = document.querySelector('.header__night')

switchButton.addEventListener('change', () => {
  main.classList.toggle('dark-theme')
    if (buttonMode.children[0].textContent === 'Dark Mode') {
      buttonMode.children[0].textContent = 'Light Mode'
      main.style.background = 'hsl(230, 17%, 14%)'
    }else {
      buttonMode.children[0].textContent = 'Dark Mode'
      main.style.background = 'hsl(0, 0%, 100%)'
    }
})

window.addEventListener('load', () => {
  if ((main.style.background = "$light-background")) {
    changeTheme.classList.add('light-theme')
    buttonMode.children[0].textContent = 'Dark Mode'
  }
})



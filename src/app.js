import './styles/sass/main.scss'
import '../pug/index.pug'

import facebook from  '../src/assets/icon-facebook.svg'
import twitter from   '../src/assets/icon-twitter.svg'
import instagram from '../src/assets/icon-instagram.svg'
import youtube from   '../src/assets/icon-youtube.svg'
import up from        '../src/assets/icon-up.svg'
import down from      '../src/assets/icon-down.svg'

const switchButton = document.getElementById('dark-mode')
const main = document.querySelector('body')
const changeTheme = document.querySelector('main')
const buttonMode = document.querySelector('.header__night')

switchButton.addEventListener('change', () => {
  main.classList.toggle('dark-theme')
    if (buttonMode.children[0].textContent === 'Dark Mode') {
      buttonMode.children[0].textContent = 'Light Mode'
    }else {
      buttonMode.children[0].textContent = 'Dark Mode'
    }
})

window.addEventListener('load', () => {
  if ((main.style.background = "$light-background")) {
    changeTheme.classList.add('light-theme')
    buttonMode.children[0].textContent = 'Dark Mode'
  }
})



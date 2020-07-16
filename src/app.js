import './styles/sass/main.scss'
import '../pug/index.pug'

import facebook from '../public/images/icon-facebook.svg'
import twitter from '../public/images/icon-twitter.svg'
import instagram from '../public/images/icon-instagram.svg'
import youtube from '../public/images/icon-youtube.svg'
import up from '../public/images/icon-up.svg'
import down from '../public/images/icon-down.svg'

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



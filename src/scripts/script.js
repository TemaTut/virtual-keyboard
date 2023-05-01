import '../styles/styles.scss'
import '../styles/styles-buttons.scss'
import { init } from './all-buttons.js'


let body = document.querySelector('body')
let wrapper = document.createElement('div')
wrapper.setAttribute('id', 'wrapper')
let title = document.createElement('p')
title.setAttribute('id', 'title')
let textArea = document.createElement('div')
textArea.setAttribute('id', 'textArea')
let myDiv = document.createElement('div')
myDiv.setAttribute('id', 'keyboard')
let description = document.createElement('p')
description.setAttribute('id', 'description')
let language = document.createElement('p')
language.setAttribute('id', 'language')



body.appendChild(wrapper)
wrapper.appendChild(title)
wrapper.appendChild(textArea)
wrapper.appendChild(myDiv)
wrapper.appendChild(description)
wrapper.appendChild(language)

title.textContent = "RSS Виртуальная клавиатура"
description.textContent = "Клавиатура создана в операционной системе Windows"
language.textContent = "Для переключения языка комбинация: левыe ctrl + alt"

init()

document.onkeydown = function (event) {
  document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.add('active')
  if (event.code === 'Backspace') {
    textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)
  } else {
    textArea.textContent += event.key
  }
  console.log(event);
}

document.onkeyup = function (event) {
  document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.remove('active')
}

document.querySelectorAll('#keyboard .key').forEach(function (element) {
  element.onmousedown = function (event) {
    event.target.classList.add('active')
    if (event.target.getAttribute('value') === 'Backspace') {
      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)
    } else {
      textArea.textContent += event.target.getAttribute('value')
      console.log(event.target.getAttribute('value'));
    }
  }
})

document.querySelectorAll('#keyboard .key').forEach(function (element) {
  element.onmouseup = function () {
    this.classList.remove('active')
  }
})




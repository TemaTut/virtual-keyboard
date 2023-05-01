import '../styles/styles.scss'
import '../styles/styles-buttons.scss'
import { init } from './all-buttons.js'
import { runOnKeys } from './runOnKeys.js'
import { runUpCase } from './isUpperCase'

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

let lang = false
let shift = false


body.appendChild(wrapper)
wrapper.appendChild(title)
wrapper.appendChild(textArea)
wrapper.appendChild(myDiv)
wrapper.appendChild(description)
wrapper.appendChild(language)

title.textContent = "RSS Виртуальная клавиатура"
description.textContent = "Клавиатура создана в операционной системе Windows"
language.textContent = "Для переключения языка комбинация: левыe shift + alt"

init()

document.onkeydown = function (event) {
  document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.add('active')
  if (!shift)
    if (event.code === 'Backspace') {
      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)
    } else if (event.code === 'Tab' || event.code === 'Enter' || event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'MetaLeft' || event.code === 'AltRight' || event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'ArrowDown' || event.code === 'ArrowRight') {
      textArea.textContent === textArea.textContent
    } else if (event.code === 'CapsLock') {
      textArea.textContent === textArea.textContent
      shift = !shift
    } else {
      textArea.textContent += event.key
    }
  if (shift)
    if (event.code === 'Backspace') {
      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)
    } else if (event.code === 'Tab' || event.code === 'Enter' || event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'MetaLeft' || event.code === 'AltRight' || event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'ArrowDown' || event.code === 'ArrowRight') {
      textArea.textContent === textArea.textContent
    } else if (event.code === 'CapsLock') {
      textArea.textContent === textArea.textContent
      shift = !shift
    } else {
      textArea.textContent += event.key.toUpperCase()
    }
}

document.onkeyup = function (event) {
  document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.remove('active')
}

document.querySelectorAll('#keyboard .key').forEach(function (element) {
  element.onmousedown = function (event) {
    if (!shift)
      event.target.classList.add('active')
    if (event.target.getAttribute('value') === 'Backspace') {
      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)
    } else if (event.target.getAttribute('value') === 'Tab' || event.target.getAttribute('value') === 'Enter' || event.target.getAttribute('value') === 'shift' || event.target.getAttribute('value') === 'Ctrl' || event.target.getAttribute('value') === 'Win' || event.target.getAttribute('value') === 'Alt' || event.target.getAttribute('value') === '↑' || event.target.getAttribute('value') === '←' || event.target.getAttribute('value') === '↓' || event.target.getAttribute('value') === '→') {
      textArea.textContent === textArea.textContent
    } else if (event.target.getAttribute('value') === 'CapsLock') {
      textArea.textContent === textArea.textContent
      shift = !shift
      console.log(event.target.getAttribute('value'));
    } else {
      textArea.textContent += event.target.getAttribute('value')
      console.log(event.target.getAttribute('value'));
    }
    if (shift)
      event.target.classList.add('active')
    if (event.target.getAttribute('value') === 'Backspace') {
      textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1)
    } else if (event.target.getAttribute('value') === 'Tab' || event.target.getAttribute('value') === 'Enter' || event.target.getAttribute('value') === 'shift' || event.target.getAttribute('value') === 'Ctrl' || event.target.getAttribute('value') === 'Win' || event.target.getAttribute('value') === 'Alt' || event.target.getAttribute('value') === '↑' || event.target.getAttribute('value') === '←' || event.target.getAttribute('value') === '↓' || event.target.getAttribute('value') === '→') {
      textArea.textContent === textArea.textContent
    } else if (event.target.getAttribute('value') === 'CapsLock') {
      textArea.textContent === textArea.textContent
      shift = !shift
    } else {
      // textArea.textContent += event.target.getAttribute('value')
    }
  }
})

document.querySelectorAll('#keyboard .key').forEach(function (element) {
  element.onmouseup = function () {
    this.classList.remove('active')
    shift = !shift
  }
})

runOnKeys(() => {
  lang = !lang
  init(lang)
}, 'ShiftLeft', 'AltLeft')

// runUpCase(() => {
//   shift = !shift
//   init(shift)
// }, 'CapsLock')


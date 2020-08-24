"use strict";

var main = document.querySelector('main'),
    voicesSelect = document.getElementById('voices'),
    textarea = document.getElementById('text'),
    readBtn = document.getElementById('read'),
    toggleBtn = document.getElementById('toggle'),
    closeBtn = document.getElementById('close');
var data = [{
  image: './img/drink.jpg',
  text: "I'm Thirsty"
}, {
  image: './img/food.jpg',
  text: "I'm Hungry"
}, {
  image: './img/tired.jpg',
  text: "I'm Tired"
}, {
  image: './img/hurt.jpg',
  text: "I'm Hurt"
}, {
  image: './img/happy.jpg',
  text: "I'm Happy"
}, {
  image: './img/angry.jpg',
  text: "I'm Angry"
}, {
  image: './img/sad.jpg',
  text: "I'm Sad"
}, {
  image: './img/scared.jpg',
  text: "I'm Scared"
}, {
  image: './img/outside.jpg',
  text: 'I Want To Go Outside'
}, {
  image: './img/home.jpg',
  text: 'I Want To Go Home'
}, {
  image: './img/school.jpg',
  text: 'I Want To Go To School'
}, {
  image: './img/grandma.jpg',
  text: 'I Want To Go To Grandmas'
}];
data.forEach(createBox); // Create speech boxed

function createBox(item) {
  var box = document.createElement('div');
  var image = item.image,
      text = item.text;
  box.classList.add('box');
  box.innerHTML = "\n        <img src=\"".concat(image, "\" alt=\"").concat(text, "\" />\n        <p class=\"info\">").concat(text, "</p>\n    "); // @todo - speak event

  main.appendChild(box);
}
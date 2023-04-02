import { englishWords } from "./englishWords.js"
let imgcookie = document.getElementById("imgcookie")
let letters = ""
let rules = document.getElementById("rules")
let imgnumber = 0
let title = document.getElementById("title")
let input_is_so_cute = document.getElementById("input_is_so_cute")
let words = ["sun", "cookie", "chocolate", "spider", "mom", "dad", "pizza", "seven","phoenix","smile"]
words = englishWords
let secretword = words[Math.floor(Math.random()*words.length)]
let shifr = document.getElementById("shifr")
shifr.innerHTML = "*".repeat(secretword.length)
console.log(englishWords);
let okcookie = document.getElementById("okcookie")
okcookie.onclick = function (event) {
  event.preventDefault();
  if (!letters.includes(input_is_so_cute.value)) {
    letters = (letters + input_is_so_cute.value)
  }
  rules.innerHTML = ("used letters: " + letters)
  if (secretword.includes(input_is_so_cute.value)) {
    console.log("correct");
    console.log(input_is_so_cute.value);
    let newshifr = ""
    for (let i = 0; i < secretword.length; i = i + 1) {
      console.log(secretword[i]);
      if (secretword[i] == input_is_so_cute.value) {
        newshifr = newshifr + input_is_so_cute.value
      }
      else {
        newshifr = newshifr + shifr.innerHTML[i]
      }
    }
    shifr.innerHTML = newshifr
    if (shifr.innerHTML == secretword) {
      title.innerHTML = "you win"
      okcookie.disabled = true
    }

  }
  else {
    title.innerHTML = "hangman"
    console.log("incorrect")
    imgnumber = imgnumber + 1
    imgcookie.src = "hangman" + imgnumber + ".png"
  }
  if (imgnumber == 6) {
    okcookie.disabled = true
    title.innerHTML = "you lose your secret word was "+(secretword)
  }
  input_is_so_cute.select()
}
okcandy.onclick = function (event) {
  event.preventDefault();
  console.log(imgnumber = imgnumber + 1)
  title.innerHTML = "hangman"
  imgnumber = 0
  imgcookie.src = "hangman" + imgnumber + ".png"
  okcookie.disabled = false
secretword =  words[Math.floor(Math.random()*words.length)]
  shifr.innerHTML = "*".repeat(secretword.length)
  letters=""
  rules.innerHTML = ("type letter and press ok")
}
for (let i = 27; i > 0.5; i = i / 3) {
  console.log(i);
}
for (let i = 16; i < 513; i = i * 2) {
  console.log(i);
}
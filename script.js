let imgcookie = document.getElementById("imgcookie")
let imgnumber = 0
let title = document.getElementById("title")
let input_is_so_cute = document.getElementById("input_is_so_cute")
let secretword = "bluepies"
let shifr = document.getElementById("shifr")
shifr.innerHTML = "*".repeat(secretword.length)
console.log("Big Fat Man");
let okcookie = document.getElementById("okcookie")
okcookie.onclick = function (event) {
  event.preventDefault();
  if (secretword.includes(input_is_so_cute.value)) {
    console.log("correct");
    console.log(input_is_so_cute.value);
    newshifr = ""
    for (let i = 0; i < 8; i = i + 1) {
      console.log(secretword[i]);
      if (secretword[i] == input_is_so_cute.value) {
        newshifr = newshifr + input_is_so_cute.value
      }
      else {
        newshifr = newshifr + shifr.innerHTML[i]
      }
    }
     shifr.innerHTML = newshifr
     if(shifr.innerHTML==secretword){
       title.innerHTML = "you win"
      }

  }
  else {
    title.innerHTML = "you lose"
    console.log("incorrect")
    imgnumber=imgnumber +1
    imgcookie.src="hangman"+ imgnumber+".png"
  }
  input_is_so_cute.select()
}
okcandy.onclick = function (event) {
  event.preventDefault();
  console.log(imgnumber=imgnumber +1)
}
for (let i = 27; i > 0.5; i = i / 3) {
  console.log(i);
}
for (let i = 16; i < 513; i = i * 2) {
  console.log(i);
}
const sound1 = new Audio("./sounds/1.wav")
const sound2 = new Audio("./sounds/2.wav")
const sound3 = new Audio("./sounds/3.wav")
const sound4 = new Audio("./sounds/4.wav")
const sound5 = new Audio("./sounds/5.wav")

let arr = [sound1, sound2, sound3, sound4, sound5]

const btnList = document.querySelector(".btn-list");

btnList.addEventListener("mousedown", (e) => {
  console.log(e.target.id)
  let num = e.target.id;
  arr[e.target.id].play()
})
//First dice:

var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = ("images/dice" + randomNumber1 + ".png")

var randomImageSource1 = document.querySelector(".img1").setAttribute("src", randomDiceImage)

console.log(randomNumber1)

//Second dice:

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = ("images/dice" + randomNumber2 + ".png")

var randomImageSource2 = document.querySelector(".img2").setAttribute("src", randomDiceImage)

console.log(randomNumber2)

//Winner message:

if (randomNumber1 < randomNumber2)  {
  document.querySelector(".title").innerHTML = "Player 2 won!"
} else if (randomNumber2 < randomNumber1) {
  document.querySelector(".title").innerHTML = "Player 1 won!"
} else if (randomNumber1 === randomNumber2) {
  document.querySelector(".title").innerHTML = "Draw!"
}

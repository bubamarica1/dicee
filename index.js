var randomNumber1=Math.floor((Math.random()) * 6);
var randomNumber2=Math.floor((Math.random()) * 6);

var noviArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".img1").setAttribute("src", noviArray[randomNumber1]);
document.querySelector(".img2").setAttribute("src", noviArray[randomNumber2]);


if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Playar One Wins!";
}

else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Playar Two Wins🚩!";
}

else
{
  document.querySelector("h1").innerHTML = " DRAW ";
}

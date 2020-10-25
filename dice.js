
var playerA = Math.floor(Math.random()*6) + 1;

var randImage1 = "images/" + "dice" + playerA + ".png";


document.querySelectorAll("img")[0].setAttribute("src",randImage1);
playerB = Math.floor(Math.random()*6) + 1;
var randImage2 = "images/dice" + playerB + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randImage2);


if(playerA>playerB)
{
    document.querySelector("h1").textContent = "Batman wins";
}
else if(playerB>playerA)
{
    document.querySelector("h1").textContent = "Superman wins";
}
else
{
    document.querySelector("h1").textContent = "It's a  draw";
}
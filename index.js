var rand1=Math.floor(Math.random()*6)+1;
var randimage1="dice"+rand1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randimage1);

var rand2=Math.floor(Math.random()*6)+1;
var randimage2="dice"+rand2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randimage2);

if(rand1>rand2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if(rand2>rand1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"

}
else{
    document.querySelector("h1").innerHTML="Draw!"

}

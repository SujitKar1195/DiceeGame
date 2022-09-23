let x = Math.random();
x= Math.floor(x*6)+1;
let y = Math.random();
y= Math.floor(y*6)+1;
let randomNumberImg1 = "dice"+x+".png";
let randomNumberImg2 = "dice"+y+".png";


if(x==y){
    document.querySelector("h1").innerHTML = "🚩Draw🚩";

}
else if(x>y){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}

document.querySelectorAll("img")[0].setAttribute("src",randomNumberImg1);
document.querySelectorAll("img")[1].setAttribute("src",randomNumberImg2);

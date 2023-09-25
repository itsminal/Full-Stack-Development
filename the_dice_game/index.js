var rv1=Math.floor((Math.random())*6)+1;
var rv2=Math.floor((Math.random())*6)+1;
    
document.querySelector(".img1").setAttribute("src", "dice"+rv1+".png");
document.querySelector(".img2").setAttribute("src", "dice"+rv2+".png");
if(rv1>rv2){
    document.querySelector("h1").innerHTML="Player 1 Won🚩";
}
else if(rv1<rv2){
    document.querySelector("h1").innerHTML="Player 2 Won🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}


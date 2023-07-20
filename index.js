
document.addEventListener("keydown", function (event){
if(event.key === "r"){
    rollDice();}
}
);
function rollDice(){
    var randomNumber2= Math.floor(6*(Math.random()));
    var randomNumber1= Math.floor(6*(Math.random()));
     var randomImage= ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
     var path1= randomImage[randomNumber1];
     var path2= randomImage[randomNumber2];
     
     document.querySelector(".img1").setAttribute("src", path1);
     document.querySelector(".img2").setAttribute("src", path2);
     if(randomNumber1>randomNumber2){
         document.querySelector("h1").innerText="Player 1 win";
         
     }
 else if(randomNumber1<randomNumber2){
     document.querySelector("h1").innerText="Player 2 win";
    
     }
     else{
      document.querySelector("h1").innerText="it's a draw";
  
  
     }
 } 
  
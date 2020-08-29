var numSquares =6;
var colors=generateRandomColors(numSquares); 
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay= document.querySelector("#massage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors= generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent =pickedColor;
    for (var i=0; i <squares.length; i++){
        if(colors[i]){
            squares[i].style.background =colors[i];
        }else{
            squares[i].style.display= "none";
        }
    }
    
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares =6;
    colors= generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent =pickedColor;
    for (var i=0; i <squares.length; i++){
         squares[i].style.background =colors[i];
         squares[i].style.display= "block";     
    }

});

resetButton.addEventListener("click", function(){
  colors= generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent= pickedColor;
  this.textContent= "NEW COLORS"
  massageDisplay.textContent="";
  for(var i=0; i< squares.length; i++){
      squares[i].style.background =colors[i];
  }
  h1.style.background ="steelblue";
});


colorDisplay.textContent= pickedColor;
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor =colors[i];
    squares[i].addEventListener("click",function(){
        var clicked=this.style.backgroundColor;
       if(clicked === pickedColor){
           resetButton.textContent="play Again?"
         massageDisplay.textContent="correct"
         changeColors(clicked);
         h1.style.background= clicked;
        }
        else{
            this.style.background ="#232323";
            massageDisplay.textContent= "try again"
        }
    });

}
function changeColors(color){
    for (var i =0; i<squares.length; i++){
        squares[i].style.background= color;
    
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = []
    for (var i =0; i< num; i++){
      arr.push(randomColor())
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}
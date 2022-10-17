var circle = document.getElementById("rotate");
var upBtn = document.getElementById("btnUp");
var downBtn = document.getElementById("bntDown");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

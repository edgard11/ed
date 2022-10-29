var note = document.getElementById('Note');
var front = document.getElementById('front');
var back = document.getElementById('back');
var pageone = document.getElementById('pageone');
var pagetwo = document.getElementById('pagetwo');
var pagethree = document.getElementById('pagethree');
var pagefour = document.getElementById('pagefour');
var pagefive = document.getElementById('pagefive');
var pagesix = document.getElementById('pagesix');
var pageseven = document.getElementById('pageseven');
var pageeight = document.getElementById('pageeight');
var pagenine = document.getElementById('pagenine');
var pageten = document.getElementById('pageten');
var open = false;
var left = false;



function pageOne(){
    if(!left){
        pageone.style.transform = "rotateY(-150deg)";
        pageone.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pageone.style.transform = "rotateY(-30deg)";
        pageone.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageTwo(){
    if(!left){
        pagetwo.style.transform = "rotateY(-150deg)";
        pagetwo.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pagetwo.style.transform = "rotateY(-30deg)";
        pagetwo.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageThree(){
    if(!left){
        pagethree.style.transform = "rotateY(-150deg)";
        pagethree.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pagethree.style.transform = "rotateY(-30deg)";
        pagethree.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageFour(){
    if(!left){
        pagefour.style.transform = "rotateY(-150deg)";
        pagefour.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pagefour.style.transform = "rotateY(-30deg)";
        pagefour.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageFive(){
    if(!left){
        pagefive.style.transform = "rotateY(-150deg)";
        pagefive.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pagefive.style.transform = "rotateY(-30deg)";
        pagefive.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageSix(){
    if(!left){
        pagesix.style.transform = "rotateY(-150deg)";
        pagesix.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pagesix.style.transform = "rotateY(-30deg)";
        pagesix.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageSeven(){
    if(!left){
        pageseven.style.transform = "rotateY(-150deg)";
        pageseven.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pageseven.style.transform = "rotateY(-30deg)";
        pageseven.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageEight(){
    if(!left){
        pageeight.style.transform = "rotateY(-150deg)";
        pageeight.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pageeight.style.transform = "rotateY(-30deg)";
        pageeight.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageNine(){
    if(!left){
        pagenine.style.transform = "rotateY(-150deg)";
        pagenine.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pagenine.style.transform = "rotateY(-30deg)";
        pagenine.style.transition = "transform .5s linear 0s";
        left = false;
    }
}
function pageTen(){
    if(!left){
        pageten.style.transform = "rotateY(-150deg)";
        pageten.style.transition = "transform .5s linear 0s";
        left = true;
    }else{
        pageten.style.transform = "rotateY(-30deg)";
        pageten.style.transition = "transform .5s linear 0s";
        left = false;
    }
}

// main book
function mainNote(){
    if(!open){
        pageone.style.transform = "rotateY(-30deg)";
        pageone.style.transition = "transform .5s linear 0s";
        pagetwo.style.transform = "rotateY(-30deg)";
        pagetwo.style.transition = "transform .5s linear 0s";
        pagethree.style.transform = "rotateY(-30deg)";
        pagethree.style.transition = "transform .5s linear 0s";
        pagefour.style.transform = "rotateY(-30deg)";
        pagefour.style.transition = "transform .5s linear 0s";
        pagefive.style.transform = "rotateY(-30deg)";
        pagefive.style.transition = "transform .5s linear 0s";
        pagesix.style.transform = "rotateY(-30deg)";
        pagesix.style.transition = "transform .5s linear 0s";
        pageseven.style.transform = "rotateY(-30deg)";
        pageseven.style.transition = "transform .5s linear 0s";
        pageeight.style.transform = "rotateY(-30deg)";
        pageeight.style.transition = "transform .5s linear 0s";
        pagenine.style.transform = "rotateY(-30deg)";
        pagenine.style.transition = "transform .5s linear 0s";
        pageten.style.transform = "rotateY(-30deg)";
        pageten.style.transition = "transform .5s linear 0s";
        back.style.transform = "rotateY(-30deg)";
        back.style.transition = "transform .5s linear 0s";
        front.style.transform = "rotateY(-150deg)";
        front.style.transition = "transform .5s linear 0s";
        note.style.transform = "rotateY(0deg) rotateX(20deg)";
        note.style.transition = "transform .5s linear 0s";
        open = true;
    }else{
        pageone.style.transform = "rotateY(-90deg)";
        pageone.style.transition = "transform .5s linear 0s";
        pagetwo.style.transform = "rotateY(-90deg)";
        pagetwo.style.transition = "transform .5s linear 0s";
        pagethree.style.transform = "rotateY(-90deg)";
        pagethree.style.transition = "transform .5s linear 0s";
        pagefour.style.transform = "rotateY(-90deg)";
        pagefour.style.transition = "transform .5s linear 0s";
        pagefive.style.transform = "rotateY(-90deg)";
        pagefive.style.transition = "transform .5s linear 0s";
        pagesix.style.transform = "rotateY(-90deg)";
        pagesix.style.transition = "transform .5s linear 0s";
        pageseven.style.transform = "rotateY(-90deg)";
        pageseven.style.transition = "transform .5s linear 0s";
        pageeight.style.transform = "rotateY(-90deg)";
        pageeight.style.transition = "transform .5s linear 0s";
        pagenine.style.transform = "rotateY(-90deg)";
        pagenine.style.transition = "transform .5s linear 0s";
        pageten.style.transform = "rotateY(-90deg)";
        pageten.style.transition = "transform .5s linear 0s";
        back.style.transform = "rotateY(-90deg)";
        back.style.transition = "transform .5s linear 0s";
        front.style.transform = "rotateY(-90deg) translateZ(0px)"
        front.style.transition = "transform .5s linear 0s";
        note.style.transform = "rotateY(90deg) rotateX(0deg)";
        note.style.transition = "transform .5s linear 0s";
        open = false;
    }
}
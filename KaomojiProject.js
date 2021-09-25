//Snackbar Animation
function snackbarAnimation(){
    document.getElementById("snackbar").animate([
        {opacity: '0%', bottom: '0px', offset: 0,  easing: 'ease-in-out'},
        {opacity: '100%', bottom: '8px', offset: 0.3},
        {opacity: '100%', bottom: '8px', offset: 0.85},
        {opacity: '0%', bottom: '8px', offset: 1},
    ],  1000)
};

window.onload = function(){
document.getElementById("categorybutton-all").disabled = true;
document.getElementById("copyinput").addEventListener('click', snackbarAnimation);
const kaomojibuttononclick = document.getElementsByClassName("kaomojibutton");
for (var i = 0 ; i < kaomojibuttononclick.length; i++) {
    kaomojibuttononclick[i].addEventListener('click' , snackbarAnimation , false ) ; 
 }
 document.getElementById("categorybutton-all").addEventListener('click',function(){
    document.getElementById("kaomojibuttonarea-all").style.display = "flex";
    document.getElementById("kaomojibuttonarea-happy").style.display = "none";
    document.getElementById("kaomojibuttonarea-surprised").style.display = "none";
    document.getElementById("kaomojibuttonarea-angry").style.display = "none";
    document.getElementById("kaomojibuttonarea-sad").style.display = "none";
    document.getElementById("kaomojibuttonarea-action").style.display = "none";
    document.getElementById("categorybutton-all").disabled = true;
    document.getElementById("categorybutton-happy").disabled = false;
    document.getElementById("categorybutton-surprised").disabled = false;
    document.getElementById("categorybutton-angry").disabled = false;
    document.getElementById("categorybutton-sad").disabled = false;
    document.getElementById("categorybutton-action").disabled = false;
})
document.getElementById("categorybutton-happy").addEventListener('click',function(){
    document.getElementById("kaomojibuttonarea-all").style.display = "none";
    document.getElementById("kaomojibuttonarea-happy").style.display = "flex";
    document.getElementById("kaomojibuttonarea-surprised").style.display = "none";
    document.getElementById("kaomojibuttonarea-angry").style.display = "none";
    document.getElementById("kaomojibuttonarea-sad").style.display = "none";
    document.getElementById("kaomojibuttonarea-action").style.display = "none";
    document.getElementById("categorybutton-all").disabled = false;
    document.getElementById("categorybutton-happy").disabled = true;
    document.getElementById("categorybutton-surprised").disabled = false;
    document.getElementById("categorybutton-angry").disabled = false;
    document.getElementById("categorybutton-sad").disabled = false;
    document.getElementById("categorybutton-action").disabled = false;
})
document.getElementById("categorybutton-surprised").addEventListener('click',function(){
    document.getElementById("kaomojibuttonarea-all").style.display = "none";
    document.getElementById("kaomojibuttonarea-happy").style.display = "none";
    document.getElementById("kaomojibuttonarea-surprised").style.display = "flex";
    document.getElementById("kaomojibuttonarea-angry").style.display = "none";
    document.getElementById("kaomojibuttonarea-sad").style.display = "none";
    document.getElementById("kaomojibuttonarea-action").style.display = "none";
    document.getElementById("categorybutton-all").disabled = false;
    document.getElementById("categorybutton-happy").disabled = false;
    document.getElementById("categorybutton-surprised").disabled = true;
    document.getElementById("categorybutton-angry").disabled = false;
    document.getElementById("categorybutton-sad").disabled = false;
    document.getElementById("categorybutton-action").disabled = false;
})
document.getElementById("categorybutton-angry").addEventListener('click',function(){
    document.getElementById("kaomojibuttonarea-all").style.display = "none";
    document.getElementById("kaomojibuttonarea-happy").style.display = "none";
    document.getElementById("kaomojibuttonarea-surprised").style.display = "none";
    document.getElementById("kaomojibuttonarea-angry").style.display = "flex";
    document.getElementById("kaomojibuttonarea-sad").style.display = "none";
    document.getElementById("kaomojibuttonarea-action").style.display = "none";
    document.getElementById("categorybutton-all").disabled = false;
    document.getElementById("categorybutton-happy").disabled = false;
    document.getElementById("categorybutton-surprised").disabled = false;
    document.getElementById("categorybutton-angry").disabled = true;
    document.getElementById("categorybutton-sad").disabled = false;
    document.getElementById("categorybutton-action").disabled = false;
})
document.getElementById("categorybutton-sad").addEventListener('click',function(){
    document.getElementById("kaomojibuttonarea-all").style.display = "none";
    document.getElementById("kaomojibuttonarea-happy").style.display = "none";
    document.getElementById("kaomojibuttonarea-surprised").style.display = "none";
    document.getElementById("kaomojibuttonarea-angry").style.display = "none";
    document.getElementById("kaomojibuttonarea-sad").style.display = "flex";
    document.getElementById("kaomojibuttonarea-action").style.display = "none";
    document.getElementById("categorybutton-all").disabled = false;
    document.getElementById("categorybutton-happy").disabled = false;
    document.getElementById("categorybutton-surprised").disabled = false;
    document.getElementById("categorybutton-angry").disabled = false;
    document.getElementById("categorybutton-sad").disabled = true;
    document.getElementById("categorybutton-action").disabled = false;
})
document.getElementById("categorybutton-action").addEventListener('click',function(){
    document.getElementById("kaomojibuttonarea-all").style.display = "none";
    document.getElementById("kaomojibuttonarea-happy").style.display = "none";
    document.getElementById("kaomojibuttonarea-surprised").style.display = "none";
    document.getElementById("kaomojibuttonarea-angry").style.display = "none";
    document.getElementById("kaomojibuttonarea-sad").style.display = "none";
    document.getElementById("kaomojibuttonarea-action").style.display = "flex";
    document.getElementById("categorybutton-all").disabled = false;
    document.getElementById("categorybutton-happy").disabled = false;
    document.getElementById("categorybutton-surprised").disabled = false;
    document.getElementById("categorybutton-angry").disabled = false;
    document.getElementById("categorybutton-sad").disabled = false;
    document.getElementById("categorybutton-action").disabled = true;
})
}


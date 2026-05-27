//Snackbar Animation
function snackbarAnimation(){
    const snackbar = document.getElementById("snackbar");
    const toggle = document.getElementById("darkmodetoggle");
    let bottomValue = 128;

    if (window.innerWidth <= 540) {
        // On mobile the snackbar container sits at margin-top: 100vh.
        // bottomValue of 88 lifts it to 40px above the viewport bottom (48px height + 40px gap).
        bottomValue = 88;
    } else if (toggle && getComputedStyle(toggle).display !== 'none') {
        const snackbarNaturalTop = snackbar.getBoundingClientRect().top;
        const toggleBottom = toggle.getBoundingClientRect().bottom;
        bottomValue = snackbarNaturalTop - toggleBottom - 16;
    }

    snackbar.animate([
        {opacity: '0%', bottom: (bottomValue - 8) + 'px', offset: 0,  easing: 'ease-in-out'},
        {opacity: '100%', bottom: bottomValue + 'px', offset: 0.3},
        {opacity: '100%', bottom: bottomValue + 'px', offset: 0.85},
        {opacity: '0%', bottom: bottomValue + 'px', offset: 1},
    ],  1000)
};

window.onload = function(){
// Disable the "all" button initially
    document.getElementById("categorybutton-all").disabled = true;

// Add event listener for copy input
    document.getElementById("copyinput").addEventListener('click', snackbarAnimation);

// Dark mode toggle
    const darkModeSwitch = document.getElementById("darkmodetoggle-switch");

    if (localStorage.getItem('darkMode') === 'off') {
        document.body.classList.add('light-mode');
        darkModeSwitch.checked = false;
    }

    darkModeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('darkMode', 'on');
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('darkMode', 'off');
        }
    });

// Categories and their associated button/area IDs
    const kaomojibuttononclick = document.getElementsByClassName("kaomojibutton");


for (var i = 0 ; i < kaomojibuttononclick.length; i++) {
    kaomojibuttononclick[i].addEventListener('click', snackbarAnimation, false) ; 
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
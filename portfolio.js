let Back = document.getElementById('mainBack');
let Cloud = document.getElementById('mainCloud');
let Right = document.getElementById('mainFont-Right');
let Left = document.getElementById('mainFont-Left');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    Cloud.style.left = value*-0.25+'px';
    Right.style.left = value*-0.6+'px';
    Left.style.left = value*0.6+'px';
    // Back.style.top = value*-0.1+'px';
})



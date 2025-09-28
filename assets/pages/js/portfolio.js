let Back = document.getElementById('mainBack');
let Cloud = document.getElementById('mainCloud');
let Right = document.getElementById('mainFont-Right');
let Left = document.getElementById('mainFont-Left');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    Cloud.style.left = value*-0.25+'px';
    Right.style.left = value*-0.6+'px';
    Left.style.left = value*0.6+'px';
})


const removeMouseContainer = () => {
    const mouseContainer = document.querySelector('.container_mouse');
    if (mouseContainer) {
        // 直接設置樣式淡出
        mouseContainer.style.transition = 'opacity 0.5s ease-out';
        mouseContainer.style.opacity = '0';
        
        // 動畫完成後移除
        setTimeout(() => mouseContainer.remove(), 500);
    }
    window.removeEventListener('scroll', removeMouseContainer);
};

window.addEventListener('scroll', removeMouseContainer);
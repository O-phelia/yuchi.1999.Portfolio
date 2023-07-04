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




// 預設滾輪原始樣式
var originalOverflowStyle = document.body.style.overflow;

// 移除滾輪功能
document.body.style.overflow = 'hidden';

// loading
window.addEventListener('load', function() {
    setTimeout(function() {
        var status = document.getElementById('status');
        var preloader = document.getElementById('preloader');

        if (status) {
            status.style.transition = 'opacity 0.5s';
            status.style.opacity = '0';
        }

        if (preloader) {
            preloader.style.transition = 'opacity 0.5s';
            preloader.style.opacity = '0';

            // 恢復滾輪原始樣式
            document.body.style.overflow = originalOverflowStyle;
        }
    }, 2300); // 延遲 2300 毫秒
});
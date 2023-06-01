let bugar_close = document.getElementById('bugar');

bugar_close.addEventListener('click',function(){
    let currentImageSrc = bugar.getAttribute('src');

    // 檢查是否是bugar.png
    if (currentImageSrc === './img/Top-img/PNG/bugar.png') {
    // 如是 將設為另一圖片
    bugar.setAttribute('src', './img/Top-img/PNG/icon_close.png');
    } else {
    // 返回原本圖片
    bugar.setAttribute('src', './img/Top-img/PNG/bugar.png');
}
})
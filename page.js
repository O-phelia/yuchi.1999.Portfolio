let bugar_close = document.getElementById('bugar');

bugar_close.addEventListener('click',function(){
    let currentImageSrc = bugar.getAttribute('src');

  // 检查当前图片是否是bugar.png
  if (currentImageSrc === './img/Top-img/PNG/bugar.png') {
    // 将src属性值设置为另一张图片的路径
    bugar.setAttribute('src', './img/Top-img/PNG/icon_close.png');
  } else {
    // 将src属性值设置回原始的bugar.png路径
    bugar.setAttribute('src', './img/Top-img/PNG/bugar.png');
}
})
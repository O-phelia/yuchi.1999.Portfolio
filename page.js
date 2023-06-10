let bugar_close = document.getElementById('bugar');
let point = document.getElementById("point");
let effects = document.querySelectorAll(".effect");
let txts = document.querySelectorAll(".Txt");
let box = document.querySelectorAll(".box");

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



effects.forEach(function(effect) {

  var timeoutId; // 用于存储延迟操作的超时ID

  effect.addEventListener("mouseover", function() {
    clearTimeout(timeoutId); // 如果存在延迟操作，则在鼠标移入时清除它
    txts.forEach(function(txt) {
      txt.style.color = "rgb(43, 42, 40)";
    });
  });

  effect.addEventListener("mouseout", function() {
    clearTimeout(timeoutId); // 如果存在延迟操作，则在鼠标移出时清除它

    timeoutId = setTimeout(function() {
      txts.forEach(function(txt) {
        txt.style.color = "rgb(255, 0, 162)";
      });
    }, 300); // 设置延迟时间（以毫秒为单位）
  });

});





// 偵測滾動事件


let bugar_close = document.getElementById('bugar');
let point = document.getElementById("point");
let effects = document.querySelectorAll(".effect");
let txts = document.querySelectorAll(".Txt");

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

  effect.addEventListener("mouseover", function() {
    txts.forEach(function(txt) {
      txt.style.color = "rgb(43, 42, 40)";
    });
  });

  effect.addEventListener("mouseout", function() {
    txts.forEach(function(txt) {
      txt.style.color = "rgb(255, 0, 162)";
    });
  });
  
});


// effect.addEventListener("mouseover", function() {
//   Txt.style.color = "rgb(43, 42, 40)" ;
// });

// effect.addEventListener("mouseout", function() {
//   Txt.style.color = "rgb(255, 0, 162)";
// });



// onetime.addEventListener("mouseenter", function() {
//   point.style.display = "block";
// });

// onetime.addEventListener("mouseleave", function() {
//   point.style.display = "none";
// });


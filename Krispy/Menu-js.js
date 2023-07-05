let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
let quantity = document.querySelector('.quantity');
let menulist = document.querySelector('.menulist');
let listCar = document.querySelector('.listCar');
let total = document.querySelector('.total');


openShopping.addEventListener('click', ()=>{
    body.classList.add('buy');
});
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('buy');
});

let products=[
    {
        id:1,
        image:'1.png',
        name:'金桔紅茶',
        price:49,
        cal:355,
    },
    {
        id:2,
        image:'2.png',
        name:'香草伯爵巧克力',
        price:45,
        cal:360,
    },
    {
        id:3,
        image:'3.png',
        name:'藍莓霓虹巧克豆',
        price:49,
        cal:405,
    },
    {
        id:4,
        image:'4.png',
        name:'草莓星星',
        price:49,
        cal:378,
    },
    {
        id:5,
        image:'5.png',
        name:'杏仁濃巧克',
        price:39,
        cal:410,
    },
    {
        id:6,
        image:'6.png',
        name:'薰衣草奶霜',
        price:45,
        cal:380,
    },
    {
        id:7,
        image:'7.png',
        name:'堅果咖啡',
        price:45,
        cal:256,
    },
    {
        id:8,
        image:'8.png',
        name:'檸檬百香',
        price:39,
        cal:298,
    },
    {
        id:9,
        image:'9.png',
        name:'宇治屋抹茶',
        price:39,
        cal:310,
    },
    {
        id:10,
        image:'10.png',
        name:'薄脆楓糖',
        price:35,
        cal:210,
    },
    {
        id:11,
        image:'11.png',
        name:'Krispy黑咖啡(熱)',
        price:70,
        cal:85,
    },
    {
        id:12,
        image:'12.png',
        name:'Krispy拿鐵(冰)',
        price:95,
        cal:160,
    },
    {
        id:13,
        image:'13.png',
        name:'Krispy卡布奇諾',
        price:75,
        cal:256,
    },
    {
        id:14,
        image:'14.png',
        name:'草莓拿鐵果昔',
        price:140,
        cal:350,
    },
    {
        id:15,
        image:'15.png',
        name:'巧克力牛奶冰沙',
        price:115,
        cal:410,
    },
    {
        id:16,
        image:'16.png',
        name:'錫蘭紅茶(無糖)',
        price:75,
        cal:90,
    },
    {
        id:17,
        image:'17.png',
        name:'熱牛奶',
        price:85,
        cal:150,
    },
    {
        id:18,
        image:'18.png',
        name:'香蕉彩虹果昔',
        price:130,
        cal:360,
    },
];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv=document.createElement('div')

        newDiv.classList.add('itemBox');
        newDiv.innerHTML=`
            <div class="pic ">
                <img src="img/${value.image}">
            </div>
            <div class="txt">
                <h2>${value.name}</h2>
                <h4>${value.cal} cal</h4>
                <h1>$${value.price.toLocaleString()}</h1>
                <button  onclick="addToCar(${key})"><i class="fa-solid fa-plus fa-2xl"></i></button>
            </div>`;

        menulist.appendChild(newDiv);
        
    })
}
// 呼叫該函示
initApp();

// ----------------------------------------

// 購物車結帳清單畫面
let listCars = [];

// 添加新品治購物車(先判斷購物車是否有該商品 若為空的情況新增預設數量為1)
function addToCar(key){
    if (listCars[key] == null){
        listCars[key] = JSON.parse(JSON.stringify(products[key]));
        listCars[key].quantity = 1;
    }

    reload();
}
// ------------------------------------------
// 向購物車中添加商品的函式()

function reload(){
    listCar.innerHTML='';

    let count = 0;
    let totalPrice = 0;

    listCars.forEach((value,key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){

            let newDiv = document.createElement('li');

            newDiv.innerHTML=`
            <div><img src="img/${value.image}"></div>
                <div><p>${value.name}</p></div>
                <div><p>${value.price.toLocaleString()}</p></div>

            <div>
                <button onclick="ChangeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="ChangeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>`;

            listCar.appendChild(newDiv);
        }

    })
    // 7.最後顯示總價與總數，toLocaleString()是js函式庫之一 可根據地區設定價格(千進位逗點標記)時間..等等
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

}

// 數量增減的函式
function ChangeQuantity(key,quantity){

    // 如果數量為0則刪除陣列
    if (quantity == 0){
        delete listCars[key];
    }else{
        listCars[key].quantity = quantity;
        listCars[key].price = quantity * products[key].price;
    }

    // 再執行一次reloadCard函式
    reload();
}
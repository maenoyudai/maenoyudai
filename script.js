// document.addEventListener('scroll', function() {
//     const scrollX = window.pagey0ffset;

//     if (scrollY > 0){
//         document.getElementById('header').classList.add('active');
//     } else {
//         document.getElementById('header').classList.remove('active');
//     }
// });


// ヘッダー
var page_name = $("body").attr("class");


let window_width = window.innerWidth;
if(window_width>767 && page_name == "index"){
    const header_disappear = document.querySelector('#header');
    window.addEventListener('scroll', () => {
    let scroll_X = window.scrollX;
    if(scroll_X > window_width){
        $('#header').addClass('active');
    }
    else{
        $('#header').removeClass('active');
    }
 });
}else{
   // ヘッダー縦ページ
const header_disappears = document.querySelector('#header');
window.addEventListener('scroll', () => {
    let scroll_Y = window.scrollY;
    // let window_width = window.innerWidth;
    if(scroll_Y > window_width){
        $('#header').addClass('active');
    }
    else{
        $('#header').removeClass('active');
    }
}); 
}
// const header_disappear = document.querySelector('#header');
// window.addEventListener('scroll', () => {
//     let scroll_X = window.scrollX;
//     if(scroll_X > window_width){
//         $('#header').addClass('active');
//     }
//     else{
//         $('#header').removeClass('active');
//     }
// });

// ヘッダー縦ページ
// const header_disappears = document.querySelector('#header');
// window.addEventListener('scroll', () => {
//     let scroll_Y = window.scrollY;
//     // let window_width = window.innerWidth;
//     if(scroll_Y > window_width){
//         $('#header').addClass('active');
//     }
//     else{
//         $('#header').removeClass('active');
//     }
// });





// モーダル
const btn = document.querySelectorAll(".modal-toggle");
btn.forEach(function (btn) {
btn.onclick = function () {
const modalAttribute = btn.getAttribute('data-modal');
const modalShow = document.getElementById(modalAttribute);
modalShow.classList.add('show');
};
});
const closeBtnTop = document.querySelectorAll(".close-btn-top");
closeBtnTop.forEach(function (btn) {
btn.onclick = function () {
const modal = btn.closest('.modal-outer');
modal.classList.remove('show');
};
});
const closeBtnBottom = document.querySelectorAll(".close-btn-bottom");
closeBtnBottom.forEach(function (btn) {
btn.onclick = function () {
const modal = btn.closest('.modal-outer');
modal.classList.remove('show');
};
});
const modalOuter = document.querySelectorAll('.modal-outer');
modalOuter.forEach(function (outer) {
outer.onclick = function () {
if(event.target.closest('.modal-inner') === null) {
event.target.classList.remove('show');
}
}
});

// ローディング
window.onload = function() {
    // loaderを消す
    // const loader = document.querySelector(".loader")
    // loader.classList.add("loaded")
    // ファーストビューを見せる
    setTimeout(() => {
    // loaderを消す
    const loader = document.querySelector(".loader")
    loader.classList.add("loaded")
    // ファーストビューを見せる
    }, 4000)
    setTimeout(() => {
        // loaderを消す
        const loader = document.querySelector(".loader")
        loader.classList.add("delete")
        // ファーストビューを見せる
        }, 4000)
};
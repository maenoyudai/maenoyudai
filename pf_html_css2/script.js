// document.addEventListener('scroll', function() {
//     const scrollX = window.pagey0ffset;

//     if (scrollY > 0){
//         document.getElementById('header').classList.add('active');
//     } else {
//         document.getElementById('header').classList.remove('active');
//     }
// });



const header_disappear = document.querySelector('.header');
window.addEventListener('scroll', () => {
    let scroll_X = window.scrollX;
    if(scroll_X > 2853){
        header_disappear.classList.add('active');
    }
    else{
        header_disappear.classList.remove('active');
    }
});
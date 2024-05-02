// document.addEventListener('scroll', function() {
//     const scrollX = window.pagey0ffset;

//     if (scrollY > 0){
//         document.getElementById('header').classList.add('active');
//     } else {
//         document.getElementById('header').classList.remove('active');
//     }
// });



const header_disappear = document.querySelector('#header');
window.addEventListener('scroll', () => {
    let scroll_X = window.scrollX;
    console.log(scroll_X);
    if(scroll_X > 2853){
        console.log(でる);
        $('#header').addClass('active');
    }
    else{
        $('#header').removeClass('active');
    }
});
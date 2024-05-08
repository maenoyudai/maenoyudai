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
    let window_width = window.innerWidth;
    if(scroll_X > window_width){
        console.log('でる');
        $('#header').addClass('active');
    }
    else{
        $('#header').removeClass('active');
    }
});